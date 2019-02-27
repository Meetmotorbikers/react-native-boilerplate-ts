import * as React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  AwesomePlaces,
  ReactNativeNavigationPlayground,
  ReactNativeNavigationTutorial,
  SignInScreen,
  SignUpScreen,
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
  /**  REACT NATIVE NAVIGATION TUTORIAL screens */
  Navigation.registerComponent(screens.WELCOME_SCREEN, () =>
    WrappedComponent(ReactNativeNavigationTutorial.WelcomeScreen)
  );
  Navigation.registerComponent(screens.LOGIN_SCREEN, () =>
    WrappedComponent(ReactNativeNavigationTutorial.LoginScreen)
  );
  Navigation.registerComponent(screens.SINGLE_APP_SCREEN, () =>
    WrappedComponent(ReactNativeNavigationTutorial.SingleAppScreen)
  );
  Navigation.registerComponent(screens.TAB1_SCREEN, () =>
    WrappedComponent(ReactNativeNavigationTutorial.Tab1Screen)
  );
  Navigation.registerComponent(screens.TAB2_SCREEN, () =>
    WrappedComponent(ReactNativeNavigationTutorial.Tab2Screen)
  );

  /**  REACT NATIVE NAVIGATION PLAYGROUND screens */
  Navigation.registerComponent(
    screens.Layouts,
    () => ReactNativeNavigationPlayground.LayoutScreen
  );
  Navigation.registerComponent(
    screens.Options,
    () => ReactNativeNavigationPlayground.OptionsScreen
  );
  Navigation.registerComponent(
    screens.Navigation,
    () => ReactNativeNavigationPlayground.NavigationScreen
  );

  /** STORYBOOK UI screens  */
  Navigation.registerComponent(screens.STORYBOOK_UI, () => StorybookUIRoot);

  /** AWESOME PLACES screens */
  Navigation.registerComponent(
    screens.SIDE_DRAWER_SCREEN,
    () => AwesomePlaces.SideDrawerScreen
  );
  Navigation.registerComponent(screens.SHARE_PLACES_SCREEN, () =>
    WrappedComponent(AwesomePlaces.SharePlaceScreen)
  );
  Navigation.registerComponent(screens.FIND_PLACES_SCREEN, () =>
    WrappedComponent(AwesomePlaces.FindPlaceScreen)
  );
  Navigation.registerComponent(screens.DETAIL_PLACE_SCREEN, () =>
    WrappedComponent(AwesomePlaces.PlaceDetailScreen)
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
