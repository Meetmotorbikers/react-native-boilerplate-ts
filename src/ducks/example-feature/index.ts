// tslint:disable: import-name
/**
 * @description Index
 * This file, from a module perspective, behaves as the duck file from the original proposal.
 *  * It exports, as default, the reducer function of the duck.
 *  * It exports, as named export, the selectors and the operations.
 *  * Optionally, it exports the types if they are needed in other ducks.
 */

import * as duckActions from './actions';
import * as duckOperations from './operations';
import reducer, { DuckActions, DuckState } from './reducers';
import * as duckSelectors from './selectors';
import * as duckTypes from './types';

export {
  duckTypes,
  duckActions,
  DuckActions,
  DuckState,
  duckSelectors,
  duckOperations,
};

export default reducer;
