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

import {
  DETAIL_PLACE_SCREEN,
  FIND_PLACES_SCREEN,
  LOGIN_SCREEN,
  SHARE_PLACES_SCREEN,
  SIDE_DRAWER_SCREEN,
  SIGN_IN_SCREEN,
  SIGN_UP_SCREEN,
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
  /**  REACT-NATIVE-NAVIGATION screens */
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

  /** STORYBOOK UI screens  */
  Navigation.registerComponent(STORYBOOK_UI, () => StorybookUIRoot);

  /** CUSTOM APP screens */
  Navigation.registerComponent(SIDE_DRAWER_SCREEN, () => SideDrawerScreen);

  Navigation.registerComponent(SHARE_PLACES_SCREEN, () =>
    WrappedComponent(SharePlaceScreen)
  );
  Navigation.registerComponent(FIND_PLACES_SCREEN, () =>
    WrappedComponent(FindPlaceScreen)
  );

  Navigation.registerComponent(DETAIL_PLACE_SCREEN, () =>
    WrappedComponent(PlaceDetailScreen)
  );

  // EXODUS APP
  Navigation.registerComponent(SIGN_IN_SCREEN, () =>
    WrappedComponent(SignInScreen)
  );
  Navigation.registerComponent(SIGN_UP_SCREEN, () =>
    WrappedComponent(SignUpScreen)
  );

  // tslint:disable-next-line:no-console
  console.info('All screens have been registered...');
};
