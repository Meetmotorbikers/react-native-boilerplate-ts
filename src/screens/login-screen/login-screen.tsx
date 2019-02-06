import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';

// import { pushSingleScreenApp, pushTabBasedApp } from '@@navigation/index';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#039893',
  },
});

interface Props {
  readonly screenType: 'Single' | 'Tab';
}

class LoginScreen extends React.PureComponent<Props> {
  readonly loginWithFacebook = () => {
    // tslint:disable-next-line: no-expression-statement
    // this.props.screenType === 'Single'
    //   ? pushSingleScreenApp()
    //   : pushTabBasedApp();
  };

  render(): JSX.Element {
    return (
      <View style={styles.flex}>
        <Button title={'Login'} onPress={this.loginWithFacebook} />
      </View>
    );
  }
}

export default LoginScreen;
