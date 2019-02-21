import * as React from 'react';
import { View } from 'react-native';

import { PlaceInput } from '@@components/index';

interface Props {
  readonly onAddPlace: (placeName: string) => void;
}

export default class SharePlaceScreen extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <View>
        <PlaceInput onAdd={this.handleOnAdd} />
      </View>
    );
  }

  private handleOnAdd = (placeName: string): void =>
    this.props.onAddPlace(placeName);
}
