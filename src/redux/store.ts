// tslint:disable: import-name no-commented-code
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './root-reducer';
import { composeEnhancers } from './utils';
// import rootEpic from './root-epic';
// import services from '../services';

// export const epicMiddleware = createEpicMiddleware(rootEpic, {
//   dependencies: services,
// });

function configureStore(initialState?: object) {
  // configure middlewares

  const middlewares: ReadonlyArray<any> = [thunk, logger /*epicMiddleware*/];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  // create store
  return createStore(rootReducer, initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
