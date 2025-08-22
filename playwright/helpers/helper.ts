import { expect, test, type Locator, type Page } from '@playwright/test';
import { setStateOnElement } from './cdp-helpers';
const TRANSITION_DURATION = 240;

export const getAttribute = (
  element: Locator,
  attribute: string
): Promise<string> => {
  return element.evaluate(
    (el: HTMLElement, attr: string) => el.getAttribute(attr)!,
    attribute
  );
};

type GetElementOptions = {
  property: keyof CSSStyleDeclaration;
  waitForTransition?: boolean;
};

type BrowserName = 'chromium' | 'firefox' | 'webkit';

type Test = 'normal' | 'interaction' | 'zoom' | 'highContrast';

type TestConfiguration = Partial<Record<Test, ScreenshotOptions & TestOptions>>;

interface TestOptions {
  skipFF?: boolean;
  skipWebkit?: boolean;
}

// Copy of the Playwright ScreenshotOptions type which is not exposed
// See: https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1
interface ScreenshotOptions {
  animations?: 'disabled' | 'allow';
  caret?: 'hide' | 'initial';
  clip?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  fullPage?: boolean;
  mask?: Array<Locator>;
  maskColor?: string;
  maxDiffPixelRatio?: number;
  maxDiffPixels?: number;
  omitBackground?: boolean;
  scale?: 'css' | 'device';
  stylePath?: string | Array<string>;
  /**
   * The threshold for screenshot comparison.
   * Default is `0.1` in our `takeScreenshot` function.
   * If issues occur, increasing it to `0.2` or `0.3` is advised.
   */
  threshold?: number;
  timeout?: number;
}

type VRTOptions = {
  cdpElementSelector?: string | string[];
  viewportWidth?: number;
  viewportWidthZoomed?: number;
  viewportHeight?: number;
  fileNamePrefix?: string;
  testConfiguration?: TestConfiguration;
};

export const getElementStyle = (
  element: Locator,
  opts: GetElementOptions
): Promise<string> => {
  return element.evaluate(
    async (el: Element, opts: GetElementOptions): Promise<string> => {
      const options: GetElementOptions = {
        waitForTransition: false,
        ...opts,
      };
      const style = getComputedStyle(el);
      if (options.waitForTransition) {
        await new Promise((resolve) =>
          setTimeout(resolve, parseFloat(style.transitionDuration) * 1000 + 300)
        );
      }
      return style[options.property]!.toString();
    },
    opts
  );
};

const PAGE_URL = 'http://localhost:3000';

export const getPageUrl = (path: string) => `${PAGE_URL}/${path}`;

export const waitForTransitionFinish = (page: Page) =>
  page.waitForTimeout(TRANSITION_DURATION);

export const BREAKPOINTS = [319, 320, 768, 1024, 1536];
export const BREAKPOINTS_EXTENDED = [1668, 1920, 2560];

type Options = {
  scenario?: (page: Page) => Promise<void>;
  customBreakpoints?: number[];
  shouldUseExtendedBreakpoints?: boolean;
  // Should be passed if executing multiple media query tests in one .vrt file, to make the tests distinguishable
  testTitle?: string;
  shouldSkipFFAndWebkitBrowser?: boolean;
  viewportHeight?: number;
};

/**
 *
 * @param pageId - The page ID where the VRT should be done
 * @param options {Options} (optional) - Options object
 * @param screenshotOptions {ScreenshotOptions} (optional) - Options object for the screenshot
 *
 * Executes media query tests for all available breakpoints.
 * If executing multiple media query tests in one .vrt file
 * make sure to set testTitle param in the options object.
 *
 * If customBreakpoints are passed, only those breakpoints will be tested.
 * */
export const executeMediaQueryTests = async (
  pageId: string,
  options?: Options,
  screenshotOptions?: ScreenshotOptions
): Promise<void> => {
  const {
    scenario,
    shouldUseExtendedBreakpoints,
    testTitle,
    shouldSkipFFAndWebkitBrowser,
    customBreakpoints,
    viewportHeight,
  } = options || {};

  if (shouldSkipFFAndWebkitBrowser) {
    skipFFAndWebkitBrowser();
  }

  let selectedBreakpoints = BREAKPOINTS;

  // Custom breakpoints have priority over shouldUseExtendedBreakpoints
  if (customBreakpoints) {
    selectedBreakpoints = customBreakpoints;
  } else if (shouldUseExtendedBreakpoints) {
    selectedBreakpoints = [...BREAKPOINTS, ...BREAKPOINTS_EXTENDED];
  }

  selectedBreakpoints.forEach((breakpoint) => {
    test(`${
      testTitle ? testTitle + ' ' : ''
    }viewport width ${breakpoint}px`, async ({ page }, { title }) => {
      // Needs to be set for proper screen height
      await page.setViewportSize({ width: breakpoint, height: 1 });

      await page.goto(getPageUrl(pageId), { waitUntil: 'networkidle' });
      await page.setViewportSize({
        width: breakpoint,
        height:
          viewportHeight ||
          (await page.evaluate(() => document.body.clientHeight)),
      });

      if (scenario) {
        await scenario(page);
      }

      await takeScreenshot(page, title, screenshotOptions);
    });
  });
};

/**
 *
 * @param page
 * @param url
 * @param viewportWidth
 * @param viewportHeight
 * @param zoomed
 *
 * Open the passed page URL, sets the viewport width in the browser
 * and disables all CSS animations.
 */
export const gotoPageAndPrepare = async (
  page: Page,
  url: string,
  viewportWidth = 1100,
  viewportHeight = 1000,
  zoomed = false
) => {
  // Needs to be set for proper screen height
  await page.setViewportSize({ width: viewportWidth, height: 1 });

  await page.goto(url, {
    waitUntil: 'networkidle',
  });

  if (zoomed) {
    await page
      .locator('html')
      .evaluate((element) => (element.style.fontSize = '200%'));
  }
  const customHeight = viewportHeight
    ? zoomed
      ? viewportHeight * 2
      : viewportHeight
    : undefined;
  await page.setViewportSize({
    width: viewportWidth,
    height:
      customHeight || (await page.evaluate(() => document.body.clientHeight)),
  });
};

/**
 *
 * @param selector
 * @param screenshotOptions {ScreenshotOptions} (optional) - Options object for the screenshot
 *
 * Runs all VRTs that need Chrome Development Protocol to force
 * hover and focus state on the passed elements.
 *
 * Since CDP is only supported in Chromium, we need to skip Firefox
 * and Webkit tests.
 */
const runInteractionTests = (
  selector: string | string[],
  screenshotOptions?: ScreenshotOptions,
  testNamePrefix?: string
) => {
  test.describe('visual regression - interactions', () => {
    skipFFAndWebkitBrowser('Interaction tests skipped on FF & Webkit');
    test(`${testNamePrefix}focus`, async ({ page }, { title }) => {
      await setStateOnElement(page, 'focus-visible', selector);
      await takeScreenshot(page, title, screenshotOptions);
    });

    test(`${testNamePrefix}hover`, async ({ page }, { title }) => {
      await setStateOnElement(page, 'hover', selector);
      await takeScreenshot(page, title, screenshotOptions);
    });

    test(`${testNamePrefix}hover + focus`, async ({ page }, { title }) => {
      await setStateOnElement(page, ['hover', 'focus-visible'], selector);
      await takeScreenshot(page, title, screenshotOptions);
    });
  });

  test.describe('visual regression - interactions high-contrast', () => {
    skipFFAndWebkitBrowser('Interaction tests skipped on FF & Webkit');

    test.beforeEach(async ({ page }: { page: Page }) => {
      await page.emulateMedia({ colorScheme: 'dark', forcedColors: 'active' });
    });

    test(`${testNamePrefix}high contrast focus`, async ({ page }, {
      title,
    }) => {
      await setStateOnElement(page, 'focus-visible', selector);
      await takeScreenshot(page, title, screenshotOptions);
    });

    test(`${testNamePrefix}high contrast hover`, async ({ page }, {
      title,
    }) => {
      await setStateOnElement(page, 'hover', selector);
      await takeScreenshot(page, title, screenshotOptions);
    });

    test(`${testNamePrefix}high contrast hover + focus`, async ({ page }, {
      title,
    }) => {
      await setStateOnElement(page, ['hover', 'focus-visible'], selector);
      await takeScreenshot(page, title, screenshotOptions);
    });
  });
};

/**
 *
 * @param path - The page ID where the VRT should be done
 * @param options - Configuration options for the VRT.
 * @param options.cdpElementSelector - CSS selector(s) to select elements for Chrome DevTools Protocol (CDP)
 *                                      to force interaction states such as hover or focus.
 * @param options.viewportWidth (optional) - Specifies the viewport width for the screenshot.
 *                                           If not provided, the default viewport width will be used.
 * @param options.viewportWidthZoomed (optional) - Specifies the viewport width for the 200% zoom screenshot.
 *                                                 If not provided, twice the value of `viewportWidth` is used.
 * @param options.viewportHeight (optional) - Specifies the viewport height for the screenshot.
 *                                            If not provided, the default viewport height will be used.
 * @param options.fileNamePrefix (optional) - A prefix added to all test snapshots.
 * @param options.testConfiguration {TestConfiguration} (optional) - An object containing various test configurations
 *                                                                    such as `normal`, `interaction`, `zoom`, and `highContrast`.
 *
 * Initialize a standard Visual Regression Test.
 *
 * Takes and compares a screenshot by visiting the URL with the passed page ID and setting the
 * viewport width. The page should contain all possible states of the elements
 * (e.g. checked, disabled, loading).
 *
 * For user interaction states such as hover & focus, runInteractionTests() is invoked.
 */
export const runVisualRegressionTest = (path: string, options?: VRTOptions) => {
  const {
    cdpElementSelector,
    viewportWidth,
    viewportWidthZoomed,
    viewportHeight,
    fileNamePrefix = '',
    testConfiguration,
  } = options || {};

  const { normal, interaction, zoom, highContrast } = testConfiguration || {};
  test.describe('visual regression', () => {
    const url = getPageUrl(path);

    test.beforeEach(async ({ page, browserName }) => {
      // Create array of browsers to be skipped
      const browserNamesToSkip = [
        normal?.skipFF && 'firefox',
        normal?.skipWebkit && 'webkit',
      ].filter(Boolean); // Filter out any falsy values (like false or undefined)

      // check if test should be skipped
      if (browserNamesToSkip.includes(browserName)) {
        test.skip();
      }

      await gotoPageAndPrepare(page, url, viewportWidth, viewportHeight);
    });

    test(`${fileNamePrefix}default`, async ({ page }, { title }) => {
      await takeScreenshot(page, title, normal);
    });
    runHighContrastTest(highContrast, fileNamePrefix);

    if (cdpElementSelector) {
      runInteractionTests(cdpElementSelector, interaction, fileNamePrefix);
    }
  });

  runZoomTest(
    path,
    // if no viewportWidthZoomed is set, use twice the viewport width, if viewportWidth is also not set, use undefined
    viewportWidthZoomed || (viewportWidth ? viewportWidth * 2 : undefined),
    viewportHeight,
    zoom,
    fileNamePrefix
  );
};

/**
 *
 * @param pageId - The page ID where the VRT should be done
 * @param viewportWidth (optional) - Set the viewport width for the zoomed screenshot
 * @param viewportHeight (optional) - Set the viewport height for the screenshot
 * @param screenshotOptions {ScreenshotOptions} (optional) - Options object for the screenshot
 *
 * To ensure quality of the components and meet WCAG Web Content Accessibility Guidelines (WCAG) 2.1
 * we want to test 200% zoom and optimize components to avoid loss of content or functionality.
 */
export const runZoomTest = (
  pageId: string,
  viewportWidth = 2000,
  viewportHeight?: number,
  screenshotOptions?: ScreenshotOptions,
  testNamePrefix?: string
) => {
  test.describe('visual regression - 200% zoom', () => {
    skipFFAndWebkitBrowser('Zoom tests skipped on FF & Webkit');

    const url = getPageUrl(pageId);

    test.beforeEach(async ({ page }: { page: Page }) => {
      await gotoPageAndPrepare(page, url, viewportWidth, viewportHeight, true);
    });

    test(`${testNamePrefix}zoomed`, async ({ page }, { title }) => {
      await takeScreenshot(page, title, screenshotOptions);
    });
  });
};

/**
 *
 * @param screenshotOptions {ScreenshotOptions} (optional) - Options object for the screenshot
 *
 * To ensure quality of the components and meet WCAG Web Content Accessibility Guidelines (WCAG) 2.1
 * we want to cover high-contrast mode in VRT test and optimize components to avoid loss of content or functionality.
 */
export const runHighContrastTest = (
  screenshotOptions?: ScreenshotOptions,
  testNamePrefix?: string
) => {
  test.describe('visual regression - high contrast', () => {
    skipFFAndWebkitBrowser('High contrast tests skipped on FF & Webkit');
    test(`${testNamePrefix}high contrast light`, async ({ page }, {
      title,
    }) => {
      await page.emulateMedia({ colorScheme: 'light', forcedColors: 'active' });

      await takeScreenshot(page, title, screenshotOptions);
    });

    test(`${testNamePrefix}high contrast dark`, async ({ page }, { title }) => {
      await page.emulateMedia({ colorScheme: 'dark', forcedColors: 'active' });

      await takeScreenshot(page, title, screenshotOptions);
    });
  });
};

/**
 * Skips tests for Firefox and Webkit browsers within a Playwright test suite.
 *
 * @param {string} - The message to display for skipped tests.
 */
export const skipFFAndWebkitBrowser = (
  message = 'Tests skipped on FF & Webkit'
) => {
  test.skip(({ browserName }) => {
    return browserName === 'firefox' || browserName === 'webkit';
  }, message);
};

/**
 * Take a screenshot with disabled animations and an YIQ color space threshold of 0.2
 * Read more about threshold here: https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1-option-threshold
 * @param page Playwright Page object
 * @param title filename of screenshot
 * @param screenshotOptions {ScreenshotOptions} (optional) - Options object for the screenshot
 */
export const takeScreenshot = async (
  page: Page,
  title: string,
  screenshotOptions?: ScreenshotOptions
) => {
  return expect(page).toHaveScreenshot(`${title}.png`, {
    animations: 'disabled',
    threshold: 0.1,
    maxDiffPixelRatio: 0,
    ...screenshotOptions,
  });
};

/**
 *
 * Since the default key for switching tabs is different for
 * Webkit and Chromium, this function returns the correct key
 * for the current browserName in Playwright.
 *
 * @param browserName
 */
export const getTabKey = (browserName: BrowserName) => {
  return browserName === 'webkit' ? 'Alt+Tab' : 'Tab';
};

// Helper function to check if an element is scrollable
export const isElementScrollable = async (
  locator: Locator
): Promise<boolean> => {
  return await locator.evaluate((element) => {
    return element.scrollHeight > element.clientHeight;
  });
};
