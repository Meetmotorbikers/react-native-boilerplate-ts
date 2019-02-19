import * as React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import i18n from '../../locale';

const instructions = Platform.select({
  android: i18n.t('platform.android'),
  ios: i18n.t('platform.ios'),
});

export default class App extends React.Component<{}> {
  render(): React.ReactNode {
    return (
      <Container>
        <Welcome testID={'headingWelcome'}>{i18n.t('greetings')}</Welcome>

        <Instructions>{i18n.t('instructions')}</Instructions>

        <Instructions>{instructions}</Instructions>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const Welcome = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 20px;
`;

const Instructions = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
`;
