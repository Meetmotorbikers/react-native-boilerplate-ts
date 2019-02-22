import Types from 'MyTypes';

import { PlacesState } from './reducers';

export const getPlaces = (state: Types.RootState): PlacesState =>
  state.places
    ? state.places
    : {
        places: [],
        selectedPlace: null,
      };
