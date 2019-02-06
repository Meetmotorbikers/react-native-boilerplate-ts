
import {Navigation} from 'react-native-navigation';
import {pushAuthScreen} from "./src/navigation";

// Navigation.events().registerAppLaunchedListener(() => pushAuthScreen())


import {AppRegistry} from "react-native";
import * as React from 'react';
import {Button, Text, View} from 'react-native';

class AuthScreen extends React.PureComponent {
  loginHandler = (e) => console.log(e);
  render () {
    return (
      <View style={{
        width: "100%",
        flex: 1
      }}>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}




AppRegistry.registerComponent('appName', () => AuthScreen);
