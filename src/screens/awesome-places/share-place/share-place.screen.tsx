// tslint:disable: no-object-mutation
import * as React from 'react';
import { View } from 'react-native';
import {
  EventSubscription,
  Navigation,
  NavigationButtonPressedEvent,
} from 'react-native-navigation';

import { PlaceInput } from '@@components/index';
import { LEFT_SIDE_MENU_ID } from 'src/constants';
import { Props } from './share-place.container';

export default class SharePlaceScreen extends React.Component<Props> {
  navigationEventListener?: EventSubscription;
  isSideDrawerVisible = false;
  componentDidMount(): void {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentWillUnmount(): void {
    // Not mandatory
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
  }

  navigationButtonPressed = (event: NavigationButtonPressedEvent): void => {
    if (event.buttonId === LEFT_SIDE_MENU_ID) {
      // quick and dirty way to do the toggling way to do the toggling.. (PS can get out of sync)
      !this.isSideDrawerVisible
        ? (this.isSideDrawerVisible = true)
        : (this.isSideDrawerVisible = false);

      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: this.isSideDrawerVisible,
          },
        },
      });
    }
  };
  render(): JSX.Element {
    return (
      <View>
        <PlaceInput onAdd={this.placeAddedHandler} />
      </View>
    );
  }

  private placeAddedHandler = (placeName: string): void =>
    this.props.onAddPlace(placeName);
}
