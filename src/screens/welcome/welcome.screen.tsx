import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components/native';

import { LOGIN_SCREEN } from '@@navigation/index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Button = styled.Button`
  font-size: 14;
  font-weight: bold;
`;

const Logo = styled.Image`
  width: 300;
  height: 120;
  resize-mode: contain;
`;

const LogoTitle = styled.Text`
  margin-top: 10;
  font-size: 16;
  font-weight: 500;
`;

class WelcomeScreen extends React.PureComponent<{
  readonly componentId: string;
}> {
  readonly handleGetStartAction = (screenType: 'Single' | 'Tab'): void => {
    Navigation.push(this.props.componentId, {
      component: {
        name: LOGIN_SCREEN,
        passProps: {
          screenType,
        },
        options: {
          topBar: {
            title: {
              text: 'LOGIN',
            },
          },
        },
      },
    });
  };

  render(): JSX.Element {
    return (
      <Wrapper>
        <Logo source={require('src/assets/images/logo.png')} />

        <LogoTitle>{'Welcome to RNN v2 Starter Kit!'}</LogoTitle>

        <Button
          color="red"
          onPress={() => this.handleGetStartAction('Single')}
          title={'Start Single Screen App'}
        />
        <Button
          onPress={() => this.handleGetStartAction('Tab')}
          title={'Start Tab Based App'}
        />
      </Wrapper>
    );
  }
}

export default WelcomeScreen;
