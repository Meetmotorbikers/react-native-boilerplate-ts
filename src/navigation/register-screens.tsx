// tslint:disable: no-expression-statement import-name variable-name function-name no-console typedef no-commented-code

import * as React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  LoginScreen,
  SingleAppScreen,
  Tab1Screen,
  Tab2Screen,
  WelcomeScreen,
} from '@@screens/index';

import Provider from 'src/redux/provider';

import {
  LOGIN_SCREEN,
  SINGLE_APP_SCREEN,
  TAB1_SCREEN,
  TAB2_SCREEN,
  WELCOME_SCREEN,
} from './screens';

function WrappedComponent(Component: React.ComponentType<any>) {
  return function inject(props: any) {
    const EnhancedComponent = () => (
      <Provider>
        <Component {...props} />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

export default function(): void {
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
  console.info('All screens have been registered...');
}
