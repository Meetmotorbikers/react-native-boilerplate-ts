// tslint:disable: readonly-keyword no-any
import { Dispatch, Middleware } from 'redux';
import Types from 'MyTypes';
import { PayloadMetaAction } from 'typesafe-actions/dist/types';

import { fetch } from '../utils';

interface Error {
  status: number;
  response: any;
}

type FetchAction = PayloadMetaAction<string, any, any>;

// TODO: use env variables to set the default path
const baseUrl =
  typeof document === 'undefined' ? 'http://localhost:7777/api' : '/api';

const apiService: Middleware<
  {},
  Types.RootState,
  Dispatch<Types.RootAction>
> = () => next => action => {
  const result = next(action);

  if (!action.meta || !action.meta.async) {
    return result;
  }

  const { path, method = 'GET', body } = action.meta;

  if (!path) {
    throw new Error(`'path' not specified for async action ${action.type}`);
  }

  const url = `${baseUrl}${path}`;

  return fetch(url, method, body).then(
    res => handleResponse(res, action, next),
    err => handleErrors(err, action, next)
  );
};

function handleErrors(
  err: Error,
  action: FetchAction,
  next: Dispatch
): Promise<never> {
  next({
    type: `${action.type}_FAILED`,
    payload: err,
    meta: action.meta,
  });

  return Promise.reject(err);
}

function handleResponse(res: {}, action: FetchAction, next: Dispatch): {} {
  next({
    type: `${action.type}_COMPLETED`,
    payload: res,
    meta: action.meta,
  });

  return res;
}

export default apiService;
