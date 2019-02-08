import * as React from 'react';
import { Button, Text, View } from 'react-native';
import styled from "styled-components/native";

interface Props {
  readonly componentId: string;
}

interface State {
  readonly value: number;
}

const Wrapper = styled(View)`
  width: 100%;
  flex: 1;
  background-color: papayawhip;
`;

const Heading = styled(Text)`
  color: palevioletred;
`;
class AuthScreen extends React.PureComponent<Props, State> {
  readonly state: State = { value: 0 };

  render(): JSX.Element {
    return (
      <Wrapper>
        <Heading>Auth Screen</Heading>
        <Button title="increment" onPress={this.loginHandler} />
        <Text>{this.state.value}</Text>
      </Wrapper>
    );
  }
  private readonly loginHandler = (e: any): void => {
    console.log(e)
    this.setState((prevState) => ({ value: prevState.value + 1 }), () => console.log(this.state));
  }
}

export default AuthScreen;
