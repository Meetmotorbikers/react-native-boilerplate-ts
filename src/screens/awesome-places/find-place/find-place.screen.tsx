// tslint:disable: no-object-mutation
import * as React from 'react';
import { View } from 'react-native';
import {
  EventSubscription,
  Navigation,
  NavigationButtonPressedEvent,
} from 'react-native-navigation';

import { PlaceList } from '@@components/index';
import { LEFT_SIDE_MENU_ID } from '@@constants/index';
import { screens } from '@@navigation/index';
import { Props } from './find-place.container';
class FindPlaceScreen extends React.PureComponent<Props> {
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
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }

  private itemSelectedHandler = (key: string): void => {
    const selectedPlace = this.props.places.find(place => place.id === key);
    const text = (selectedPlace && selectedPlace.name) || 'Place Details';

    Navigation.push(this.props.componentId, {
      component: {
        name: screens.DETAIL_PLACE_SCREEN,
        passProps: { selectedPlace },
        options: {
          topBar: {
            title: { text },
          },
        },
      },
    });
  };
}

export default FindPlaceScreen;
