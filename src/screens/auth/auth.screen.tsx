import * as React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  readonly componentId: string;
}

const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  background-color: papayawhip;
`;

const Heading = styled.Text`
  color: palevioletred;
`;

class AuthScreen extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <Wrapper>
        <Heading>Auth Screen</Heading>
        <Button onPress={console.log} title="Login" testID="loginBtn" />
      </Wrapper>
    );
  }
}

export default AuthScreen;
