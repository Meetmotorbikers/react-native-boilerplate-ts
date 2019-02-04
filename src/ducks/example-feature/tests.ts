// tslint:disable: import-name no-expression-statement
/**
 * @description Tests
 * One of the main advantages of `redux` is that you can easily do unit tests for your
 * `reducers`,
 * `action creators` and`selectors`.
 * And with a small effort, you can do the same for the`operations`.
 *
 * Ultimately, the split proposed here also helps you see what you need to test inside each
 * duck. This example is using`mocha` and`expect.js`.
 */
// import expect from 'expect.js';

import * as actions from './actions';
import reducer from './reducers';


describe('duck reducer', () => {
  describe('quack', () => {
    const quack = actions.quack();
    const initialState = { quacking: false, distance: 0 };

    const result = reducer(initialState, quack);

    it('should quack', () => {
      expect(result).toBe(true);
    });
  });
});
