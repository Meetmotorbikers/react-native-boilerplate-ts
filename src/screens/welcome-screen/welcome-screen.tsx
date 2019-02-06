import * as React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import { Navigation } from 'react-native-navigation';

import { LOGIN_SCREEN } from '@@navigation/index';

const styles = StyleSheet.create( {
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#039893',
    width: 230,
    marginTop: 30,
    borderRadius: 25,
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  logo: {
    width: 300,
    height: 120,
    resizeMode: 'contain',
  },
  logoTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
} );

class WelcomeScreen extends React.PureComponent<{
  readonly componentId: string;
}> {
  readonly handleGetStartAction = ( screenType: string ): void => {
    // tslint:disable-next-line: no-expression-statement
    console.log( 'WelcomeScreen -> handleGetStartAction: ', screenType );

    // tslint:disable-next-line: no-expression-statement
    // Navigation.push( this.props.componentId, {
    //   component: {
    //     name: LOGIN_SCREEN,
    //     passProps: {
    //       screenType,
    //     },
    //     options: {
    //       topBar: {
    //         title: {
    //           text: 'LOGIN',
    //         },
    //       },
    //     },
    //   },
    // } );
  };

  render(): JSX.Element {
    return (
      <View style={styles.flex}>
        <Image
          style={styles.logo}
          source={require( 'src/img/images/logo.png' )}
        />
        <Text style={styles.logoTitle}>{'Welcome to RNN v2 Starter Kit!'}</Text>

        <Button
          color="red"
          onPress={() => this.handleGetStartAction( 'Single' )}
          title={'Start Single Screen App'}
        />
        <Button
          onPress={() => this.handleGetStartAction( 'Tab' )}
          title={'Start Tab Based App'}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
