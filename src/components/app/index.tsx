import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';

import { placesAction, placesSelectors, PlacesState } from '../../ducks/places';

import App, { OwnProps } from './app';

export type StateProps = PlacesState;

export interface DispatchProps {
  readonly onAddPlace: (placeName: string) => void;
  readonly onDeletePlace: () => void;
  // readonly onSelectPlace: (key: string) => void;
  // readonly onDeselectPlace: () => void;
}

const mapStateToProps = (
  state: Types.RootState
  // ownProps: OwnProps
): StateProps => placesSelectors.getPlaces(state);

const mapDispatchToProps = (
  dispatch: Dispatch<Types.RootAction>
): DispatchProps => ({
  onAddPlace: placeName => dispatch(placesAction.add(placeName)),
  onDeletePlace: () => dispatch(placesAction.remove()),
  // onSelectPlace: key => dispatch(placesAction.select(key)),
  // onDeselectPlace: () => dispatch(placesAction.deselect()),
});

export type Props = StateProps & DispatchProps & OwnProps;

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);
