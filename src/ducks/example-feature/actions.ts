/**
 * ### Actions
 * It's important to be consistent when defining actions, so let's always export functions from
 * this file, we don't care if the action needs any input from the outside to build the payload
 * or not.
 * NOTE: Trying to impose a bit of structure to the actions object, the`type/payload` approach is
 * pretty popular.
 */

import { createAction } from 'typesafe-actions';
import * as types from './types';

export const quack = createAction(types.QUACK);

export const swim = createAction(types.SWIM, resolve => {
  return (distance: number) => resolve({ distance });
});
