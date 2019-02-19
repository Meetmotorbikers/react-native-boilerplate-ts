// import {AppRegistry} from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

/**
 * Refer to:
 * https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
 * To find allowed options for getStorybookUI
 * This assumes that storybook is running on the same host as your RN packager,
 * to set manually use, e.g. host: 'localhost' option
 */
const StorybookUIRoot = getStorybookUI({
  host: 'localhost',
  onDeviceUI: true,
  port: 7007,
});
export default StorybookUIRoot;
