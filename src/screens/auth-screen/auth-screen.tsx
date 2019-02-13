import * as React from 'react';
import { Button, Text } from 'react-native';
import styled from "styled-components/native";
import Config from 'react-native-config'

interface Props {
  readonly componentId: string;
}

interface State {
  readonly value: number;
}

const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  background-color: papayawhip;
`;

const Heading = styled.Text`
  color: palevioletred;
`;

const increment = (prevState: { value: number }) => ({ value: prevState.value++ })
class AuthScreen extends React.PureComponent<Props, State> {
  readonly state: State = { value: 0 };

  render(): JSX.Element {
    return (
      <Wrapper>
        <Heading>Auth Screen</Heading>
        <Button title="increment" onPress={this.loginHandler} />
        <Text>{Config.API_URL}</Text>
        <Text>{this.state.value}</Text>
      </Wrapper>
    );
  }
  private readonly loginHandler = (e: any): void => {
    console.log(e)
    this.setState(increment, () => console.log(this.state));
  }
}

export default AuthScreen;
