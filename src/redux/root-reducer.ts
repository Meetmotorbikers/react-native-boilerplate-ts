// tslint:disable: import-name
import { combineReducers } from 'redux';

import duckReducer from '../ducks/example-feature';

const rootReducer = combineReducers({
  duck: duckReducer,
  // ...
});

export default rootReducer;
