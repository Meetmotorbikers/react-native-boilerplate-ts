// tslint:disable: import-name
import { combineReducers } from 'redux';

import duckReducer from '@@ducks/example-feature';
import placesReducer from '@@ducks/places';

const rootReducer = combineReducers({
  duck: duckReducer,
  places: placesReducer,
  // ...
});

export default rootReducer;
