// tslint:disable: no-expression-statement
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

// import { pushTutorialScreen } from '@@navigation/index';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props {
  readonly data: {};
}
class Tab1Screen extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }: { readonly buttonId: string }): void {
    switch (buttonId) {
      case 'nav_logout_btn': {
        // pushTutorialScreen();
        break;
      }

      case 'nav_user_btn': {
        break;
      }

      default:
        break;
    }
  }

  render(): JSX.Element {
    return (
      <View style={styles.flex}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Play top buttons!
        </Text>
      </View>
    );
  }
}

export default Tab1Screen;
