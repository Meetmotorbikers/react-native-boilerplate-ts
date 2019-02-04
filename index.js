import * as React from "react";
import { AppRegistry } from 'react-native';
import { Provider } from "react-redux";
import App from 'src/app';
import store from "./src/redux";
// @ts-ignore
import { name as appName } from './app.json';

const RootComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
)


AppRegistry.registerComponent(appName, () => RootComponent);
