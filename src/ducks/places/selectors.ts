import Types from 'Types';

import { PlacesState } from './reducers';

export const getPlaces = (state: Types.RootState): PlacesState =>
  state.places
    ? state.places
    : {
        places: [],
        selectedPlace: null,
      };
