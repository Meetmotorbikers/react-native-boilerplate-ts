import { placesSelectors } from '@@ducks/places';
import { Places } from '@@ducks/places/models';
import MyTypes from 'MyTypes';
import { connect } from 'react-redux';

import FindPlaceScreen from './find-place.screen';

interface StateProps {
  readonly places: Places;
}

interface OwnProps {
  readonly componentId: string;
}

const mapStateToProps = (
  state: MyTypes.RootState,
  ownProps: OwnProps
): StateProps => ({
  places: placesSelectors.getPlaces(state).places,
});

export type Props = StateProps & OwnProps;

export default connect(mapStateToProps)(FindPlaceScreen);
