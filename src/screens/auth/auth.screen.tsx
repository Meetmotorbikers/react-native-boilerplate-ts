import { startMainTabs } from '@@navigation/index';
import * as React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  readonly componentId: string;
  readonly rootTag: number;
  readonly text: string;
}

const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  background-color: papayawhip;
`;

const Heading = styled.Text`
  color: palevioletred;
`;

const CompProps = styled.Text`
  color: blue;
`;

class AuthScreen extends React.PureComponent<Props> {
  handleButtonPress = (ev: any): void => {
    startMainTabs();
  };

  render(): JSX.Element {
    return (
      <Wrapper>
        <Heading>Auth Screen</Heading>
        <CompProps>componentId: {this.props.componentId}</CompProps>
        <CompProps>rootTag: {this.props.rootTag}</CompProps>
        <CompProps>text: {this.props.text}</CompProps>
        <Button
          onPress={this.handleButtonPress}
          title="Login"
          testID="loginBtn"
        />
      </Wrapper>
    );
  }
}

export default AuthScreen;
