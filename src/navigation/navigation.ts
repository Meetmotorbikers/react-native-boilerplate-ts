import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  FIND_PLACES_SCREEN,
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

import registerScreens from './register-screens.navigation';

const FIND_PLACE = 'Find Place';
const SHARE_PLACE = 'Share Place';

import { LEFT_SIDE_MENU_ID } from 'src/constants';
import testIDs from 'src/constants/testIDs';

/** Register all screens on launch */
registerScreens();

// start the app on auth screen:
export function pushAuthScreen(): void {
  Navigation.setRoot({
    root: {
      stack: {
        options: {},
        children: [
          {
            component: {
              name: SIGN_UP_SCREEN,
              options: {},
            },
          },

          {
            component: {
              name: SIGN_IN_SCREEN,
              options: {},
            },
          },
        ],
      },
    },
  });
}

export function startMainTabs(): void {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30),
    Icon.getImageSource('ios-menu', 30),
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: SIDE_DRAWER_SCREEN,
            },
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: FIND_PLACES_SCREEN,
                          passProps: {
                            label: FIND_PLACE,
                          },
                          options: {
                            topBar: {
                              testID: testIDs.TOP_BAR_FIND_PLACE,
                              title: {
                                text: FIND_PLACE,
                              },
                              leftButtons: [
                                {
                                  icon: sources[2],
                                  text: 'Menu',
                                  id: LEFT_SIDE_MENU_ID,
                                  color: '#007AFF',
                                },
                              ],
                            },
                          },
                        },
                      },
                    ],
                    options: {
                      bottomTab: {
                        testID: 'FIND_PLACES_SCREEN',
                        text: FIND_PLACE,
                        icon: sources[0],
                        selectedIconColor: '#007AFF',
                      },
                    },
                  },
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: SHARE_PLACES_SCREEN,
                          passProps: {
                            label: SHARE_PLACE,
                          },
                          options: {
                            topBar: {
                              title: {
                                text: SHARE_PLACE,
                              },
                              leftButtons: [
                                {
                                  icon: sources[2],
                                  text: 'Menu',
                                  id: LEFT_SIDE_MENU_ID,
                                  color: '#007AFF',
                                },
                              ],
                            },
                          },
                        },
                      },
                    ],
                    options: {
                      bottomTab: {
                        testID: 'SHARE_PLACES_SCREEN',
                        text: SHARE_PLACE,
                        icon: sources[1],
                        selectedIconColor: '#007AFF',
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
    });
  });
}

export function pushStorybookScreen(): void {
  Navigation.setRoot({
    root: {
      component: {
        name: STORYBOOK_UI,
      },
    },
  });
}

export function pushTutorialScreen(): void {
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
              name: WELCOME_SCREEN,
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
}

export function pushSingleScreenApp(): void {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SINGLE_APP_SCREEN,
              options: {
                topBar: {
                  title: {
                    text: 'SINGLE SCREEN APP',
                  },
                  leftButtons: [
                    {
                      id: 'nav_user_btn',
                      // tslint:disable-next-line:no-duplicate-string
                      icon: require('src/assets/icons/ic_nav_user.png'),
                      color: 'white',
                    },
                  ],
                  rightButtons: [
                    {
                      id: 'nav_logout_btn',
                      // tslint:disable-next-line:no-duplicate-string
                      icon: require('src/assets/icons/ic_nav_logout.png'),
                      color: 'white',
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  });
}

export function pushTabBasedApp(): void {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: TAB1_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'TAB 1',
                        },
                        leftButtons: [
                          {
                            id: 'nav_user_btn',
                            icon: require('src/assets/icons/ic_nav_user.png'),
                            color: 'white',
                          },
                        ],
                        rightButtons: [
                          {
                            id: 'nav_logout_btn',
                            icon: require('src/assets/icons/ic_nav_logout.png'),
                            color: 'white',
                          },
                        ],
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('src/assets/icons/ic_tab_home.png'),
                  testID: 'FIRST_TAB_BAR_BUTTON',
                  text: 'Tab1',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: TAB2_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'TAB 2',
                        },
                        leftButtons: [
                          {
                            id: 'nav_user_btn',
                            icon: require('src/assets/icons/ic_nav_user.png'),
                            color: 'white',
                          },
                        ],
                        rightButtons: [
                          {
                            id: 'nav_logout_btn',
                            icon: require('src/assets/icons/ic_nav_logout.png'),
                            color: 'white',
                          },
                        ],
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('src/assets/icons/ic_tab_menu.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                  text: 'Tab2',
                },
              },
            },
          },
        ],
      },
    },
  });
}
