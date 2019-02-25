import * as _ from 'lodash';
import * as React from 'react';
import { Alert, Text } from 'react-native';
import { Button, Input, SocialIcon } from 'react-native-elements';
import styled from 'styled-components/native';

import { AuthFooter, Link } from '@@components/index';
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
  readonly email: string;
  readonly password: string;
}

class AuthScreen extends React.PureComponent<Props, State> {
  state: State = {
    email: '',
    password: '',
  };

  render(): JSX.Element {
    return (
      <AuthContainer>
        <MainWrapper>
          <Title>{i18n.t('login.title')}</Title>
          <SocialAuthWrapper>
            <SocialIcon
              title={i18n.t('login.withFacebook')}
              button={true}
              type="facebook"
              style={{ borderRadius: 0, marginHorizontal: 0 }}
              onPress={() => this.onSocialLoginHandler('facebook')}
            />
            <SocialIcon
              title={i18n.t('login.withGoogle')}
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
            {i18n.t('login.or')}
          </Text>

          <Input
            placeholder={i18n.t('login.placeholderEmail')}
            onChangeText={this.handleEmailChange}
            value={this.state.email}
            containerStyle={{ marginTop: 24 }}
            textContentType="emailAddress"
          />
          <Input
            placeholder={i18n.t('login.placeholderPassword')}
            onChangeText={this.handlePasswordChange}
            value={this.state.password}
            containerStyle={{ marginTop: 24 }}
            textContentType="password"
          />

          <Button
            onPress={this.handleButtonPress}
            title={'Einloggen'}
            testID="loginBtn"
            buttonStyle={{
              borderRadius: 0,
              marginTop: 24,
              marginBottom: 16,
              backgroundColor: '#E01F1F',
            }}
            containerStyle={{
              width: '100%',
            }}
            disabled={!this.state.email || !this.state.password}
          />

          <Link>{i18n.t('login.passwordForgotten')}</Link>
        </MainWrapper>

        <AuthFooter
          title={i18n.t('login.dontHaveAnAccount')}
          actionCopy={i18n.t('login.signUpNow')}
          onPress={console.log}
        />
      </AuthContainer>
    );
  }
  private handleButtonPress = (ev: any): void => {
    startMainTabs();
  };

  private onSocialLoginHandler = (type: 'google' | 'facebook'): void => {
    Alert.alert(
      'Sign in',
      `You tried to sign in with ${_.capitalize(type)}.
      This feature is not available yet, please sign in with email and password`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  private handlePasswordChange = (password: string): void =>
    this.setState(prevState => ({ password }));

  private handleEmailChange = (email: string): void =>
    this.setState(prevState => ({ email }));
}

export default AuthScreen;
