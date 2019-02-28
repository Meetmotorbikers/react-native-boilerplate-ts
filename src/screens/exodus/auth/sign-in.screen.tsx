import * as _ from 'lodash';
import * as React from 'react';
import { Alert, AsyncStorage, Text } from 'react-native';
import { Button, Input, SocialIcon } from 'react-native-elements';
import styled from 'styled-components/native';

import { Link } from '@@components/index';
import config from '@@config/index';
import i18n from '@@locale/index';
import { startMainTabs } from '@@navigation/index';
import { goHome } from '@@navigation/index';
import console = require('console');

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

const SocialAuthWrapper = styled.View`
  margin-top: 42;
  width: 100%;
`;

interface Props {
  readonly componentId: string;
  readonly rootTag: number;
  readonly text: string;
}

interface State {
  readonly username: string;
  readonly password: string;
}

class SignIn extends React.PureComponent<Props, State> {
  state: State = {
    username: '',
    password: '',
  };

  render(): JSX.Element {
    return (
      <AuthContainer>
        <MainWrapper>
          <Title>{i18n.t('auth.signIn.title')}</Title>
          <SocialAuthWrapper>
            <SocialIcon
              title={i18n.t('auth.signIn.withFacebook')}
              button={true}
              type="facebook"
              style={{ borderRadius: 0, marginHorizontal: 0 }}
              onPress={() => this.onSocialLoginHandler('facebook')}
            />
            <SocialIcon
              title={i18n.t('auth.signIn.withGoogle')}
              button={true}
              type="google-plus-official"
              style={{ borderRadius: 0, marginHorizontal: 0 }}
              onPress={() => this.onSocialLoginHandler('google')}
            />
          </SocialAuthWrapper>

          <Text
            style={{
              alignSelf: 'center',
              color: '#D9DBDE',
              marginTop: 24,
              marginBottom: 24,
            }}
          >
            {i18n.t('auth.signIn.or')}
          </Text>

          <Input
            placeholder={i18n.t('auth.signIn.placeholderUsername')}
            onChangeText={username => this.onChangeText('username', username)}
            value={this.state.username}
            containerStyle={{ marginTop: 24 }}
            textContentType="username"
          />
          <Input
            placeholder={i18n.t('auth.signIn.placeholderPassword')}
            onChangeText={password => this.onChangeText('password', password)}
            value={this.state.password}
            containerStyle={{ marginTop: 24 }}
            textContentType="password"
            secureTextEntry={true}
          />

          <Button
            onPress={this.singIn}
            title={i18n.t('auth.signIn.signInBtn')}
            testID="SignInBTN"
            buttonStyle={{
              borderRadius: 0,
              marginTop: 24,
              marginBottom: 16,
              backgroundColor: '#E01F1F',
            }}
            containerStyle={{
              width: '100%',
            }}
            disabled={!this.state.username || !this.state.password}
          />

          <Link>{i18n.t('auth.signIn.passwordForgotten')}</Link>
        </MainWrapper>
      </AuthContainer>
    );
  }

  private onChangeText = (
    key: 'username' | 'password',
    value: string
  ): void => {
    switch (key) {
      case 'username':
        return this.setState({ username: value });

      case 'password':
        return this.setState({ password: value });
    }
  };

  private singIn = async (): Promise<void> => {
    const { username: email } = this.state;
    try {
      // login with provider
      const user = await AsyncStorage.setItem(config.USER_KEY, email);
      // tslint:disable-next-line: no-console
      console.log('user successfully signed in!', user);
      goHome();
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log('error: ', error);
    }
  };

  private onSocialLoginHandler = (type: 'google' | 'facebook'): void => {
    Alert.alert(
      'Sign in',
      `You tried to sign in with ${_.capitalize(type)}.
      This feature is not available yet, please sign in with email and password`,
      [
        {
          text: 'Cancel',
          onPress: (): void => {
            // tslint:disable-next-line: no-console
            console.log('Cancel Pressed');
          },
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };
}

export default SignIn;
