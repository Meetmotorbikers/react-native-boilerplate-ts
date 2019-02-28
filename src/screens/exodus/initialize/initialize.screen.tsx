import * as React from 'react';
import { AsyncStorage } from 'react-native';
import styled from 'styled-components/native';

import config from '@@config/index';
import { goHome, goToAuth } from '@@navigation/index';

const Welcome = styled.Text`
  font-size: 28;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {
  readonly componentId: string;
}
export default class Initialize extends React.Component<Props> {
  async componentDidMount(): Promise<void> {
    try {
      const user = await AsyncStorage.getItem(config.USER_KEY);

      // tslint:disable-next-line: no-console
      console.log('user: ', user);
      if (user) {
        goHome();
      } else {
        goToAuth();
      }
    } catch (err) {
      // tslint:disable-next-line: no-console
      console.log('error: ', err);
      goToAuth();
    }
  }

  render(): JSX.Element {
    return (
      <Container>
        <Welcome>Loading</Welcome>
      </Container>
    );
  }
}
