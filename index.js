import { Navigation } from 'react-native-navigation';

import config from './src/config';

import {
  pushStorybookScreen,
  pushTutorialScreen,
  pushAuthScreen,
} from './src/navigation';

Navigation.events().registerAppLaunchedListener(() => {
  switch (config.selectWhatToRender) {
    case 0:
      return pushStorybookScreen();

    case 1:
      return pushTutorialScreen();

    case 2:
      return pushAuthScreen();

    default:
      return pushAuthScreen();
  }
});
