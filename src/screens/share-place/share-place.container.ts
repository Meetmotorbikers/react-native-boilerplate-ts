import { connect } from 'react-redux';
import Types from 'MyTypes';
import SharePlaceScreen from './share-place.screen';

import { placesAction } from '@@ducks/places';

interface OwnProps {
  readonly componentId: string;
}

interface DispatchProps {
  readonly onAddPlace: (placeName: string) => void;
}

export type Props = OwnProps & DispatchProps;

const mapDispatchToProps = (
  dispatch: Types.DispatchTypeSafe,
  ownProps: OwnProps
): DispatchProps => ({
  onAddPlace: placeName => dispatch(placesAction.add(placeName)),
});

export default connect<void, DispatchProps, OwnProps>(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
