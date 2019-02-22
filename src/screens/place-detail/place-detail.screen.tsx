import * as React from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

interface Props {
  readonly selectedPlace: {
    readonly image: ImageSourcePropType;
    readonly name: string;
    readonly id: string;
  };
  readonly onItemDeleted: () => void;
  readonly onModalClose: () => void;
}

const PlaceDetails: React.FC<Props> = ({ selectedPlace, onItemDeleted }) => {
  return (
    <Container>
      <View>
        <PlaceImage source={selectedPlace.image} />
        <PlaceName>{selectedPlace.name}</PlaceName>
      </View>
      <View>
        <DeleteButton onPress={onItemDeleted} />
      </View>
    </Container>
  );
};

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

const DeleteButton: React.FC<{
  readonly onPress: (e: GestureResponderEvent) => void;
}> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <DeleteButtonIconWrapper>
      <Icon name="ios-trash" size={30} color="red" />
    </DeleteButtonIconWrapper>
  </TouchableOpacity>
);

export default PlaceDetails;
