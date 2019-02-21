import { createAction } from 'typesafe-actions';

import { ADD, DELETE, DESELECT, SELECT } from './types';

export const add = createAction(ADD, resolve => {
  return (placeName: string) => resolve({ placeName });
});

export const select = createAction(SELECT, resolve => {
  return (key: string) => resolve({ key });
});

export const deselect = createAction(DESELECT);

export const remove = createAction(DELETE);
