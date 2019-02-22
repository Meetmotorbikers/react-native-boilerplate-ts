import * as React from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { PlaceList } from '@@components/index';
import { DETAIL_PLACE_SCREEN } from '@@navigation/index';
import { Props } from './find-place.container';
class FindPlaceScreen extends React.PureComponent<Props> {
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
        name: DETAIL_PLACE_SCREEN,
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
