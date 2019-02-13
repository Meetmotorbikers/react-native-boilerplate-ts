import {Navigation} from 'react-native-navigation';

import config from "./src/config";

import {
  pushStorybookScreen,
  pushTutorialScreen
} from "./src/navigation";


Navigation.events().registerAppLaunchedListener(() => {
  config.shouldDisplayStorybook
    ? pushStorybookScreen()
    : pushTutorialScreen();
})
