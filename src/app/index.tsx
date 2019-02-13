import * as React from 'react';
import { Platform } from 'react-native';
import styled from "styled-components/native";

const instructions = Platform.select({
  android: `Double tap R on your keyboard to reload,
    Shake or press menu button for dev menu`,
  ios: `Press Cmd+R to reload,
  Cmd+D or shake for dev menu`,
});

export default class App extends React.Component<{}> {
  render(): React.ReactNode {
    return (
      <Container>
        <Welcome testID={'headingWelcome'}>
          Welcome to React Native!
        </Welcome>
        <Instructions>To get started, edit App.js</Instructions>
        <Instructions>{instructions}</Instructions>
      </Container>
    );
  }
}


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const Welcome = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 20px;
`;

const Instructions = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
`;
