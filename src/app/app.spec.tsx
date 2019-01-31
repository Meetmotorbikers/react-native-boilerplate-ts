import * as React from 'react';
import 'react-native';
import App from './index';

// Note: test renderer must be required after react-native.
// tslint:disable-next-line: import-name
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
