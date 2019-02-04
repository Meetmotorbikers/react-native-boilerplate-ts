/**
 * @description Reducers
 * It's a good practice to keep your **state shape** in a comment above the reducers, just to have
 * an overview.
 *
 * In case the state shape is more complex, you should break the reducers into multiple smaller
 * functions that deal with a slice of the state, then combine them at the end.
 *
 * NOTE: Let's keep it simple for now with `switch` statements and abstract later.
 */

import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import * as duckActions from './actions';

export type DuckActions = ActionType<typeof duckActions>;

export interface DuckState {
  readonly quacking: boolean;
  readonly distance: number;
}

const initialState: DuckState = {
  quacking: false,
  distance: 0,
};

const reducer: Reducer<DuckState, DuckActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(duckActions.quack): {
      return { ...state, quacking: true };
    }

    case getType(duckActions.swim): {
      const { distance } = action.payload;
      return { ...state, distance: state.distance + distance };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
