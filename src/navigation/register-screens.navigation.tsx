// tslint:disable: typedef no-commented-code

import * as React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  // AuthScreen,
  LoginScreen,
  SingleAppScreen,
  Tab1Screen,
  Tab2Screen,
  WelcomeScreen,
} from '@@screens/index';

import StorybookUIRoot from '../../tools/storybook';

import Provider from 'src/redux/provider';

import {
  // AUTH_SCREEN,
  LOGIN_SCREEN,
  SINGLE_APP_SCREEN,
  STORYBOOK_UI,
  TAB1_SCREEN,
  TAB2_SCREEN,
  WELCOME_SCREEN,
} from './screens.navigation';

const WrappedComponent = (Component: React.ComponentType<any>) => (
  props: any
) => {
  const EnhancedComponent = () => (
    <Provider>
      <Component {...props} />
    </Provider>
  );
  return <EnhancedComponent />;
};

// Register Screens
export default (): void => {
  // Navigation.registerComponent(AUTH_SCREEN, () => AuthScreen);
  Navigation.registerComponent(STORYBOOK_UI, () => StorybookUIRoot);

  Navigation.registerComponent(WELCOME_SCREEN, () =>
    WrappedComponent(WelcomeScreen)
  );
  Navigation.registerComponent(LOGIN_SCREEN, () =>
    WrappedComponent(LoginScreen)
  );
  Navigation.registerComponent(SINGLE_APP_SCREEN, () =>
    WrappedComponent(SingleAppScreen)
  );
  Navigation.registerComponent(TAB1_SCREEN, () => WrappedComponent(Tab1Screen));
  Navigation.registerComponent(TAB2_SCREEN, () => WrappedComponent(Tab2Screen));

  // tslint:disable-next-line:no-console
  console.info('All screens have been registered...');
};
