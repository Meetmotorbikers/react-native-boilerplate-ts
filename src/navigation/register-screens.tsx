import * as React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  FindPlaceScreen,
  LoginScreen,
  PlaceDetailScreen,
  SharePlaceScreen,
  SideDrawerScreen,
  SignInScreen,
  SignUpScreen,
  SingleAppScreen,
  Tab1Screen,
  Tab2Screen,
  WelcomeScreen,
} from '@@screens/index';

import StorybookUIRoot from '../../tools/storybook';

import { Provider } from '@@redux/index';

import * as screens from './screens';

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
export const registerScreens = (): void => {
  /**  REACT-NATIVE-NAVIGATION screens */
  Navigation.registerComponent(screens.WELCOME_SCREEN, () =>
    WrappedComponent(WelcomeScreen)
  );
  Navigation.registerComponent(screens.LOGIN_SCREEN, () =>
    WrappedComponent(LoginScreen)
  );
  Navigation.registerComponent(screens.SINGLE_APP_SCREEN, () =>
    WrappedComponent(SingleAppScreen)
  );
  Navigation.registerComponent(screens.TAB1_SCREEN, () =>
    WrappedComponent(Tab1Screen)
  );
  Navigation.registerComponent(screens.TAB2_SCREEN, () =>
    WrappedComponent(Tab2Screen)
  );

  /** STORYBOOK UI screens  */
  Navigation.registerComponent(screens.STORYBOOK_UI, () => StorybookUIRoot);

  /** CUSTOM APP screens */
  Navigation.registerComponent(
    screens.SIDE_DRAWER_SCREEN,
    () => SideDrawerScreen
  );

  Navigation.registerComponent(screens.SHARE_PLACES_SCREEN, () =>
    WrappedComponent(SharePlaceScreen)
  );
  Navigation.registerComponent(screens.FIND_PLACES_SCREEN, () =>
    WrappedComponent(FindPlaceScreen)
  );

  Navigation.registerComponent(screens.DETAIL_PLACE_SCREEN, () =>
    WrappedComponent(PlaceDetailScreen)
  );

  // EXODUS APP
  Navigation.registerComponent(screens.SIGN_IN_SCREEN, () =>
    WrappedComponent(SignInScreen)
  );
  Navigation.registerComponent(screens.SIGN_UP_SCREEN, () =>
    WrappedComponent(SignUpScreen)
  );

  // tslint:disable-next-line:no-console
  console.info('All screens have been registered...');
};
