import { Dispatch } from 'redux';
import { StateType } from 'typesafe-actions';

import { DuckActions } from '@@ducks/example-feature';
import { PlacesAction } from '@@ducks/places';
import rootReducer from './root-reducer';

declare module 'MyTypes' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction =
    | DuckActions
    | PlacesAction /* | CatActions | DogActions */;

  export type DispatchTypeSafe = Dispatch<RootAction>;
}
