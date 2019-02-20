import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'react-native';

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
// const { JSDOM } = require('jsdom');
import { DOMWindow, JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src: DOMWindow, target: NodeJS.Global): void {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}
// @ts-ignore
// tslint:disable-next-line: no-object-mutation
global.window = window;
// @ts-ignore
// tslint:disable-next-line: no-object-mutation
global.document = window.document;
// @ts-ignore
// tslint:disable-next-line: no-object-mutation
global.navigator = {
  userAgent: 'node.js',
};

copyProps(window, global);

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({
  adapter: new Adapter(),
});

/**
 * Ignore some expected warnings
 * see: https://jestjs.io/docs/en/tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16
 * see https://github.com/Root-App/react-native-mock-render/issues/6
 */

// tslint:disable-next-line: no-console
const originalConsoleError = console.error;

// tslint:disable-next-line: no-console no-object-mutation
console.error = (message?: any) => {
  if (message.startsWith('Warning:')) {
    return;
  }

  originalConsoleError(message);
};
