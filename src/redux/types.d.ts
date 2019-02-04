import { StateType } from 'typesafe-actions';

import rootReducer from './root-reducer';
import { DuckActions } from '../ducks/example-feature';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = DuckActions /* | CatActions | DogActions */;
}
