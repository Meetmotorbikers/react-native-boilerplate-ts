import * as React from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Types from 'Types';

import { Navigation } from 'react-native-navigation';

import { placesAction } from '@@ducks/places';
interface DispatchProps {
  readonly onItemDeleted: (key: string) => void;
}

interface OwnProps {
  readonly componentId: string;
  readonly selectedPlace: {
    readonly image: ImageSourcePropType;
    readonly name: string;
    readonly id: string;
  };
  readonly onModalClose: () => void;
}

type Props = OwnProps & DispatchProps;

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

const DeleteButton: React.FC<{
  readonly onPress: (e: GestureResponderEvent) => void;
}> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <DeleteButtonIconWrapper>
      <Icon name="ios-trash" size={30} color="red" />
    </DeleteButtonIconWrapper>
  </TouchableOpacity>
);

const mapDispatchToProps = (
  dispatch: Types.DispatchTypeSafe
): DispatchProps => ({
  onItemDeleted: id => dispatch(placesAction.remove(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetails);
