import { createAction } from 'typesafe-actions';

import { ADD, DELETE } from './types';

export const add = createAction(ADD, resolve => {
  return (placeName: string) => resolve({ placeName });
});

export const remove = createAction(DELETE);
