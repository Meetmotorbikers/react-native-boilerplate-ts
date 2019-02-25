// tslint:disable: no-expression-statement
/**
 * @description Operations
 * In a simple application, you can easily dispatch simple actions and use the reducers to manage
 * the state. However, in a more complex app you need to use some sort of middleware to handle more
 * complex interactions.
 * In our case, we use[redux - thunk](https://github.com/gaearon/redux-thunk).
 *
 * The operations file define the`interface` for our duck.
 * You can reason about it like this: 1 operation = X actions dispatched.
 * This makes each operation function either ** a thunk ** in case it needs to
 * dispatch multiple actions, or simply ** a link ** to an action already defined in `actions.ts`.
 *
 * This separation should work with whatever middleware / lib you are using for
 * handling chained / linked / delayed operations.
 *
 * NOTE: [redux - observables](https://github.com/redux-observable/redux-observable) uses the idea
 * of `epics` which I also like.
 */

import Types from 'MyTypes';
import { ThunkAction } from 'redux-thunk';
import * as actions from './actions';

type ThunkResult<R> = ThunkAction<
  R,
  Types.RootState,
  undefined,
  Types.RootAction
>;

// This is a link to an action defined in actions.ts.
const simpleQuack = actions.quack;

// This is a thunk which dispatches multiple actions from actions.js
const complexQuack = (distance: number): ThunkResult<void> => dispatch => {
  dispatch(actions.quack()).then(() => {
    dispatch(actions.swim(distance));
  });
};

export { simpleQuack, complexQuack };
