// tslint:disable: no-console
import * as React from 'react';
import { Button, Input } from 'react-native-elements';
import styled from 'styled-components/native';

import { AuthFooter } from '@@components/index';
import i18n from '@@locale/index';
import { startMainTabs } from '@@navigation/index';

const AuthContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

const MainWrapper = styled.View`
  padding: 0 20px;
  flex: 3;
  width: 100%;
  align-items: center;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 38;
  margin-top: 8;
`;

interface Props {
  readonly componentId: string;
  readonly rootTag: number;
  readonly text: string;
}

interface State {
  readonly email: string;
  readonly password: string;
  readonly confirmPassword: string;
  readonly enableSignUpBTN: boolean;
}

class SignUp extends React.PureComponent<Props, State> {
  state: State = {
    email: '',
    password: '',
    confirmPassword: '',
    enableSignUpBTN: false,
  };

  render(): JSX.Element {
    return (
      <AuthContainer>
        <MainWrapper>
          <Title>{i18n.t('auth.signUp.title')}</Title>

          <Input
            placeholder={i18n.t('auth.signUp.placeholderEmail')}
            onChangeText={this.handleEmailChange}
            value={this.state.email}
            containerStyle={{ marginTop: 24 }}
            textContentType="emailAddress"
          />

          <Input
            placeholder={i18n.t('auth.signUp.placeholderPassword')}
            onChangeText={this.handlePasswordChange}
            value={this.state.password}
            containerStyle={{ marginTop: 24 }}
            textContentType="newPassword"
            secureTextEntry={true}
          />

          <Input
            placeholder={i18n.t('auth.signUp.placeholderConfirmPassword')}
            onChangeText={this.handleConfirmPasswordChange}
            value={this.state.confirmPassword}
            containerStyle={{ marginTop: 24 }}
            secureTextEntry={true}
          />

          <Button
            onPress={this.handleButtonPress}
            title={'SignUp'}
            testID="SignUpBTN"
            buttonStyle={{
              borderRadius: 0,
              marginTop: 24,
              marginBottom: 16,
              backgroundColor: '#E01F1F',
            }}
            containerStyle={{
              width: '100%',
            }}
            disabled={!this.state.enableSignUpBTN}
          />
        </MainWrapper>

        <AuthFooter
          title={i18n.t('auth.signUp.alreadyHaveAnAccount')}
          actionCopy={i18n.t('auth.signUp.signInNow')}
          onPress={console.log}
        />
      </AuthContainer>
    );
  }
  private handleButtonPress = (ev: any): void => {
    startMainTabs();
  };

  private shouldEnableSignUpBTN = (): void => {
    const { email, password, confirmPassword } = this.state;
    if (email && password && password === confirmPassword) {
      this.setState(prevState => ({ enableSignUpBTN: true }));
    }
  };

  private handlePasswordChange = (password: string): void =>
    this.setState(
      prevState => ({ password }),
      () => this.shouldEnableSignUpBTN()
    );

  private handleEmailChange = (email: string): void =>
    this.setState(prevState => ({ email }), () => this.shouldEnableSignUpBTN());

  private handleConfirmPasswordChange = (confirmPassword: string): void =>
    this.setState(
      prevState => ({ confirmPassword }),
      () => this.shouldEnableSignUpBTN()
    );
}

export default SignUp;
