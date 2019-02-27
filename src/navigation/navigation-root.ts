import testIDs from '@@constants/testIDs';
import { Navigation } from 'react-native-navigation';
import * as screens from './screens';

export const Storybook = (): void => {
  Navigation.setRoot({
    root: {
      component: {
        name: screens.STORYBOOK_UI,
      },
    },
  });
};

export const RNNTutorial = (): void => {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: '#039893',
      },
      title: {
        color: 'white',
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white',
      },
      buttonColor: 'white',
    },
    statusBar: {
      style: 'light',
    },
    layout: {
      orientation: ['portrait'],
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'gray',
      selectedIconColor: 'black',
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: screens.WELCOME_SCREEN,
              options: {
                topBar: {
                  visible: false,
                },
                statusBar: {
                  style: 'dark',
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const RNNPlayground = (): void => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: screens.Layouts,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Layouts',
                  icon: require('src/assets/images/layouts.png'),
                  testID: testIDs.LAYOUTS_TAB,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: screens.Options,
                  },
                },
              ],
              options: {
                topBar: {
                  title: {
                    text: 'Default Title',
                  },
                },
                bottomTab: {
                  text: 'Options',
                  icon: require('src/assets/images/options.png'),
                  testID: testIDs.OPTIONS_TAB,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: screens.Navigation,
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
};

export const App = (): Promise<void> => {
  return Navigation.setRoot({
    root: {
      component: {
        name: screens.INITIALIZE_SCREEN,
      },
    },
  });
};
