import { placesAction } from '@@ducks/places';
import MyTypes from 'MyTypes';
import { ImageSourcePropType } from 'react-native';
import { connect } from 'react-redux';

import PlaceDetails from './place-detail.screen';

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

export type Props = OwnProps & DispatchProps;

const mapDispatchToProps = (
  dispatch: MyTypes.DispatchTypeSafe
): DispatchProps => ({
  onItemDeleted: id => dispatch(placesAction.remove(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetails);
