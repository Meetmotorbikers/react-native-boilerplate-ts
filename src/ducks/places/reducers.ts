import cuid from 'cuid';
import * as R from 'ramda';
import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import * as placesActions from './actions';
import { Place, Places } from './models';

export type PlacesAction = ActionType<typeof placesActions>;

export interface PlacesState {
  readonly places: Places;
  readonly selectedPlace: null | Place;
}

const initialState: PlacesState = {
  places: [],
  selectedPlace: null,
};

const reducer: Reducer<PlacesState, PlacesAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    // 'ADD_PLACE'
    case getType(placesActions.add): {
      const { placeName } = action.payload;

      const place: Place = {
        id: cuid(),
        name: placeName,
        image: {
          uri: 'https://picsum.photos/g/200/200/?blur',
        },
      };

      return {
        ...state,
        places: R.append(place, state.places),
      };
    }

    // 'DELETE_PLACE'
    case getType(placesActions.remove): {
      const { selectedPlace } = state;
      if (!selectedPlace) break;

      return {
        ...state,
        places: R.reject(place => place.id === selectedPlace.id, state.places),
        selectedPlace: null,
      };
    }

    default:
      return state;
  }
};

export default reducer;
