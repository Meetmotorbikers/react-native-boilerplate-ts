import { Navigation } from 'react-native-navigation';
import Colors from './colors';

/**
 * Set default options to all screens. Useful for declaring a consistent style across the app.
 */
export const setDefaultOptions = (): void =>
  Navigation.setDefaultOptions({
    layout: {
      componentBackgroundColor: Colors.background,
      orientation: ['portrait'],
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
    },
    bottomTab: {
      selectedIconColor: Colors.primary,
      selectedTextColor: Colors.primary,
    },
  });
