import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import * as screens from './screens';

const FIND_PLACE = 'Find Place';
const SHARE_PLACE = 'Share Place';

import { LEFT_SIDE_MENU_ID } from 'src/constants';
import testIDs from 'src/constants/testIDs';

export function startMainTabs(): Promise<void> {
  return Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30),
    Icon.getImageSource('ios-menu', 30),
  ]).then(([mapIcon, shareIcon, menuIcon]) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: screens.SIDE_DRAWER_SCREEN,
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
                          name: screens.FIND_PLACES_SCREEN,
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
                                  icon: menuIcon,
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
                        icon: mapIcon,
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
                          name: screens.SHARE_PLACES_SCREEN,
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
                                  icon: menuIcon,
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
                        icon: shareIcon,
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

export function pushSingleScreenApp(): void {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: screens.SINGLE_APP_SCREEN,
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
                    name: screens.TAB1_SCREEN,
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
                    name: screens.TAB2_SCREEN,
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

export const goToAuth = (): Promise<void> => {
  return Promise.all([
    Icon.getImageSource('ios-log-in', 30),
    Icon.getImageSource('ios-person-add', 30),
  ]).then(([signInIcon, signUpIcon]) =>
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BottomTabsId',
          children: [
            {
              component: {
                name: screens.SIGN_IN_SCREEN,
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Sign In',
                    icon: signInIcon,
                  },
                },
              },
            },
            {
              component: {
                name: screens.SIGN_UP_SCREEN,
                options: {
                  bottomTab: {
                    text: 'Sign Up',
                    fontSize: 12,
                    icon: signUpIcon,
                  },
                },
              },
            },
          ],
        },
      },
    })
  );
};

// export const goHome = (): Promise<void> => startMainTabs();
// tslint:disable-next-line: no-commented-code
export const goHome = (): Promise<any> =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: screens.HOME_SCREEN,
            },
          },
        ],
      },
    },
  });
