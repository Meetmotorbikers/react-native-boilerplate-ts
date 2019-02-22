import MyTypes from 'MyTypes';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

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
  state: MyTypes.RootState
  // ownProps: OwnProps
): StateProps => placesSelectors.getPlaces(state);

const mapDispatchToProps = (
  dispatch: Dispatch<MyTypes.RootAction>
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
