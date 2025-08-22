import type {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestError,
  TestResult,
} from '@playwright/test/reporter';
const consoleColors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
};

/**
 * A CustomLineReporter that enables us to identify tests in the console that are using the helper.ts util functions for playwright visual regression tests
 */
class CustomLineReporter implements Reporter {
  private failedTests: { test: TestCase; result: TestResult }[] = [];

  logErrors(errors: TestError[]) {
    errors.forEach((error, index) => {
      console.log(`  ${index + 1}) ${error.message}`);
      console.log(error.stack);
    });
  }

  onBegin(_config: FullConfig, suite: Suite) {
    console.log(`Running ${suite.allTests().length} tests...`);
  }

  onStdOut(chunk: string | Buffer, test: void | TestCase): void {
    if (test?.title) {
      console.log(`${test.titlePath().join(' ')}: `, chunk);
    } else {
      console.log(chunk);
    }
  }

  onTestEnd(test: TestCase, result: TestResult) {
    let status;
    switch (result.status) {
      case 'passed':
        status = '✅';
        break;
      case 'failed':
        status = '❌';
        break;
      case 'interrupted':
        status = '⚡️';
        break;
      case 'skipped':
        status = 'Skip';
        break;
      case 'timedOut':
        status = '⏱️ Timeout';
        break;
      default:
        status = 'Something Else';
        break;
    }

    let duration: string;

    if (result.duration > 60000) {
      duration = `${(result.duration / 60000).toFixed(2)}m`; // Convert milliseconds to minutes
    } else if (result.duration > 1000) {
      duration = `${(result.duration / 1000).toFixed(2)}s`; // Convert milliseconds to seconds
    } else {
      duration = `${result.duration}ms`; // display milliseconds
    }

    const color =
      result.status === 'passed'
        ? consoleColors.green
        : result.status === 'failed' ||
            result.status === 'interrupted' ||
            result.status === 'timedOut'
          ? consoleColors.red
          : consoleColors.cyan;

    console.log(
      `${color}[${status}] ${test.titlePath().join(' ')} (${duration})${consoleColors.reset}`
    );

    if (
      result.status === 'failed' ||
      result.status === 'interrupted' ||
      result.status === 'timedOut'
    ) {
      // log errors immediately on failed test
      this.logErrors(result.errors);
      this.failedTests.push({ test, result });
    }
  }

  onEnd(result: FullResult) {
    console.log(`Finished the test run with status: ${result.status}`);

    // log failed test summary
    if (this.failedTests.length > 0) {
      console.log(`${consoleColors.red}Failed tests:${consoleColors.reset}`);
      this.failedTests.forEach(({ test, result }) => {
        console.log(
          `${consoleColors.red}${test.titlePath().join(' ')}${consoleColors.reset}`
        );
        this.logErrors(result.errors);
      });
    }
  }
}
export default CustomLineReporter;
