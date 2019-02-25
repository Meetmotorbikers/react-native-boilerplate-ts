import * as React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

interface Props {
  readonly componentId: string;
}

class SideDrawer extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidAppear(): void {
    console.log('RNN', 'SideDrawerScreen.componentDidAppear');
  }

  componentDidDisappear(): void {
    console.log('RNN', 'SideDrawerScreen.componentDidDisappear');
  }

  render(): JSX.Element {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get('window').width * 0.8 },
        ]}
      >
        <Text>SideDrawer</Text>
        <Button title="Hide Side Menu" onPress={() => this.hideSideMenu()} />
      </View>
    );
  }

  private hideSideMenu = (): void => {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    });
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: 'white',
    flex: 1,
  },
});

export default SideDrawer;
