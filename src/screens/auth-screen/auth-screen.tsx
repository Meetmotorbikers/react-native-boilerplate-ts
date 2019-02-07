import * as React from 'react';
import { Button, Text, View } from 'react-native';

interface Props {
  readonly componentId: string;
}

interface State {
  readonly value: number;
}
class AuthScreen extends React.PureComponent<Props, State> {
  readonly state: State = { value: 0 };

  render(): JSX.Element {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button title="increment" onPress={this.loginHandler} />
        <Text>{this.state.value}</Text>
      </View>
    );
  }
  private readonly loginHandler = (e: any): void => {
    console.log(e)
    this.setState((prevState) => ({ value: prevState.value + 1 }), () => console.log(this.state));
  }
}

export default AuthScreen;
