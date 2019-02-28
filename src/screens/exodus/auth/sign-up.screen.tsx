// tslint:disable: variable-name max-union-size

import * as React from 'react';
import { Button, Input } from 'react-native-elements';
import styled from 'styled-components/native';

import i18n from '@@locale/index';
import { startMainTabs } from '@@navigation/index';

const AuthContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  margin-top: 30;
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
  readonly username: string;
  readonly phone_number: string;
  readonly email: string;
  readonly password: string;
  readonly confirmPassword: string;
  readonly enableSignUpBTN: boolean;
}

class SignUp extends React.PureComponent<Props, State> {
  state: State = {
    username: '',
    email: '',
    phone_number: '',
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
            placeholder={'Username'}
            onChangeText={username => this.onChangeText('username', username)}
            value={this.state.username}
            containerStyle={{ marginTop: 24 }}
            textContentType="username"
          />

          <Input
            placeholder={i18n.t('auth.signUp.placeholderEmail')}
            onChangeText={value => this.onChangeText('email', value)}
            value={this.state.email}
            containerStyle={{ marginTop: 24 }}
            textContentType="emailAddress"
          />

          <Input
            placeholder={'Phone Number'}
            onChangeText={phone_number =>
              this.onChangeText('phone_number', phone_number)
            }
            value={this.state.phone_number}
            containerStyle={{ marginTop: 24 }}
            textContentType="telephoneNumber"
          />

          <Input
            placeholder={i18n.t('auth.signUp.placeholderPassword')}
            onChangeText={value => this.onChangeText('password', value)}
            value={this.state.password}
            containerStyle={{ marginTop: 24 }}
            textContentType="newPassword"
            secureTextEntry={true}
          />

          <Input
            placeholder={i18n.t('auth.signUp.placeholderConfirmPassword')}
            onChangeText={value => this.onChangeText('confirmPassword', value)}
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
      </AuthContainer>
    );
  }
  private handleButtonPress = (ev: any): void => {
    startMainTabs();
  };

  private shouldEnableSignUpBTN = (): void => {
    const {
      email,
      password,
      confirmPassword,
      phone_number,
      username,
    } = this.state;

    if (
      username &&
      email &&
      password &&
      phone_number &&
      password === confirmPassword
    ) {
      this.setState(prevState => ({ enableSignUpBTN: true }));
    }
  };

  private onChangeText = (
    key: 'username' | 'email' | 'phone_number' | 'password' | 'confirmPassword',
    value: string
  ): void => {
    switch (key) {
      case 'username':
        return this.setState({ username: value }, this.shouldEnableSignUpBTN);

      case 'phone_number':
        return this.setState(
          { phone_number: value },
          this.shouldEnableSignUpBTN
        );

      case 'email':
        return this.setState({ email: value }, this.shouldEnableSignUpBTN);

      case 'password':
        return this.setState({ password: value }, this.shouldEnableSignUpBTN);

      case 'confirmPassword':
        return this.setState(
          { confirmPassword: value },
          this.shouldEnableSignUpBTN
        );
    }
  };
}

export default SignUp;
