import * as React from 'react';
import { View } from 'react-native';
import { connect, MapStateToProps } from 'react-redux';
import Types from 'Types';

import { PlaceList } from '@@components/index';
import { placesSelectors } from '@@ducks/places';
import { Places } from '@@ducks/places/models';

class FindPlaceScreen extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.handleItemSelected}
        />
      </View>
    );
  }

  handleItemSelected = (key: string): void => {
    console.log(key);
  };
}

interface StateProps {
  readonly places: Places;
}

interface OwnProps {
  readonly componentId: string;
}

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  Types.RootState
> = (state, ownProps) => ({
  places: placesSelectors.getPlaces(state).places,
});

type Props = StateProps & OwnProps;

export default connect<StateProps>(mapStateToProps)(FindPlaceScreen);
