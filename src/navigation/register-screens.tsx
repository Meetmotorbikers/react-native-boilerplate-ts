import * as React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  AwesomePlaces,
  LayoutScreen,
  LoginScreen,
  NavigationScreen,
  OptionsScreen,
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
  /**  RNN TUTORIAL screens */
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

  /**  RNN PLAYGROUND screens */
  Navigation.registerComponent(screens.Layouts, () => LayoutScreen);
  Navigation.registerComponent(screens.Options, () => OptionsScreen);
  Navigation.registerComponent(screens.Navigation, () => NavigationScreen);

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
