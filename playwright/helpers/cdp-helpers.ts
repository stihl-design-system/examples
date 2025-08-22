import type { Page } from '@playwright/test';

export const setStateOnElement = async (
  page: Page,
  state: string | string[],
  elementSelector: string | string[]
) => {
  const client = await page.context().newCDPSession(page);
  await client.send('DOM.enable');
  await client.send('CSS.enable');

  const document = await client.send('DOM.getDocument');
  const body = await client.send('DOM.querySelector', {
    nodeId: document.root.nodeId,
    selector: 'body',
  });

  // Helper function to apply state to found elements
  const applyStateToElements = async (selector: string) => {
    const elements = await client.send('DOM.querySelectorAll', {
      selector: selector,
      nodeId: body.nodeId,
    });

    for (const element of elements.nodeIds) {
      await client.send('CSS.forcePseudoState', {
        nodeId: element,
        forcedPseudoClasses: Array.isArray(state) ? state : [state],
      });
    }
  };

  if (Array.isArray(elementSelector)) {
    // Handle multiple selectors
    for (const selector of elementSelector) {
      await applyStateToElements(selector);
    }
  } else {
    // Handle a single selector
    await applyStateToElements(elementSelector);
  }
};
