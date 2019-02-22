import { placesSelectors } from '@@ducks/places';
import { Places } from '@@ducks/places/models';
import { connect } from 'react-redux';
import Types from 'MyTypes';

import FindPlaceScreen from './find-place.screen';

interface StateProps {
  readonly places: Places;
}

interface OwnProps {
  readonly componentId: string;
}

const mapStateToProps = (
  state: Types.RootState,
  ownProps: OwnProps
): StateProps => ({
  places: placesSelectors.getPlaces(state).places,
});

export type Props = StateProps & OwnProps;

export default connect(mapStateToProps)(FindPlaceScreen);
