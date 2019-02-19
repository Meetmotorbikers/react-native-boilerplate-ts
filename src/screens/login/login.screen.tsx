import * as React from 'react';
import styled from 'styled-components/native';

import { pushSingleScreenApp, pushTabBasedApp } from '@@navigation/index';

interface Props {
  readonly screenType: 'Single' | 'Tab';
}

export default class LoginScreen extends React.PureComponent<Props> {
  readonly loginWithFacebook = () => {
    this.props.screenType === 'Single'
      ? pushSingleScreenApp()
      : pushTabBasedApp();
  };

  render(): JSX.Element {
    return (
      <Wrapper>
        <LoginButton title={'Login'} onPress={this.loginWithFacebook} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.Button`
  background-color: #039893;
`;
