import { Navigation } from 'react-native-navigation';

import { setDefaultOptions } from './commons/options';

import { navigationRoot, registerScreens } from '@@navigation/index';

import config from './config';

export function start(): void {
  /** Register all screens on launch */
  registerScreens();

  Navigation.events().registerAppLaunchedListener(async () => {
    // Set default options to all screens
    setDefaultOptions();

    /**
     * switch the desired navigation root by assigning the correct ENUM Property to
     * `selectWhatToRender` in the config/index file
     * ```
     * const config: Config = { ...  selectWhatToRender: Render.App };
     * ```
     */
    switch (config.selectWhatToRender) {
      case 0:
        return navigationRoot.Storybook();

      case 1:
        return navigationRoot.App();

      case 2:
        return navigationRoot.RNNTutorial();

      case 3:
        return navigationRoot.RNNPlayground();

      default:
        return navigationRoot.App();
    }
  });
}
