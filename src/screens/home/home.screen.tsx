import * as React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native';
import { Navigation, Options } from 'react-native-navigation';

import config from '@@config/index';
import { goToAuth } from '@@navigation/index';

interface Props {
  readonly componentId: string;
}
export default class Home extends React.Component<Props> {
  static get options(): Options {
    return {
      topBar: {
        title: {
          text: 'Home',
        },
      },
    };
  }
  render(): JSX.Element {
    console.log('props: ', this.props);

    return (
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
        <Button onPress={this.logout} title="Sign Out" />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'Screen2',
              },
            });
          }}
          title="View next screen"
        />
      </View>
    );
  }
  private logout = async () => {
    try {
      await AsyncStorage.removeItem(config.USER_KEY);
      goToAuth();
    } catch (err) {
      console.log('error signing out...: ', err);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
