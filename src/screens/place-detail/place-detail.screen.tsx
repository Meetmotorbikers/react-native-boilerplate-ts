import * as React from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import { Props } from './place-detail.container';

const DeleteButton: React.FC<{
  readonly onPress: (e: GestureResponderEvent) => void;
}> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <DeleteButtonIconWrapper>
      <Icon name="ios-trash" size={30} color="red" />
    </DeleteButtonIconWrapper>
  </TouchableOpacity>
);

class PlaceDetails extends React.PureComponent<Props> {
  render(): JSX.Element {
    const { selectedPlace } = this.props;
    return (
      <Container>
        <View>
          <PlaceImage source={selectedPlace.image} />
          <PlaceName>{selectedPlace.name}</PlaceName>
        </View>
        <View>
          <DeleteButton onPress={this.placeDeletedHandler} />
        </View>
      </Container>
    );
  }

  private placeDeletedHandler = (): void => {
    this.props.onItemDeleted(this.props.selectedPlace.id);
    Navigation.pop(this.props.componentId);
  };
}

const Container = styled.View`
  margin: 22px;
`;

const PlaceImage = styled.Image`
  width: 100%;
  height: 100px;
`;

const PlaceName = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 28;
`;

const DeleteButtonIconWrapper = styled.View`
  align-items: center;
`;

export default PlaceDetails;
