import * as React from 'react';
import { Button, Text } from 'react-native';
import Config from 'react-native-config';
import styled from 'styled-components/native';

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

const increment = (prevState: State) => ({ value: prevState.value + 1 });

class AuthScreen extends React.PureComponent<Props, State> {
  state: State = { value: 0 };

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
  private loginHandler = (e: any): void => {
    // tslint:disable-next-line:no-console
    console.log(e);
    // tslint:disable-next-line:no-console
    this.setState(increment, () => console.log(this.state));
  };
}

export default AuthScreen;
