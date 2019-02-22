import * as React from 'react';
import { View } from 'react-native';

import { PlaceInput } from '@@components/index';
import { Props } from './share-place.container';

export default class SharePlaceScreen extends React.PureComponent<Props> {
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
