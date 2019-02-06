import * as React from 'react';
import { Button, Text, View } from 'react-native';

class AuthScreen extends React.PureComponent<{
  readonly componentId: string;
}> {
  readonly loginHandler = (e: any): void => console.log(e);
  render(): JSX.Element {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

export default AuthScreen;
