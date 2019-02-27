import * as placesAction from './actions';
import reducer, { PlacesAction, PlacesState } from './reducers';
import * as placesSelectors from './selectors';
import * as placesTypes from './types';

export {
  placesTypes,
  placesAction,
  PlacesAction,
  PlacesState,
  placesSelectors,
};

export default reducer;
