import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';

import {
  App,
  Button,
  CenterView,
  LottieAnimatedExample,
  LottieLoader,
  ReactNativeLocalizeExample,
  Welcome,
} from '@@components/index';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

storiesOf('Lottie', module)
  .add('example', () => <LottieLoader />)
  .add('example Picker', () => <LottieAnimatedExample />);

storiesOf('Localization', module).add('example', () => (
  <ReactNativeLocalizeExample />
));

storiesOf('App', module).add('i18n', () => <App />);
