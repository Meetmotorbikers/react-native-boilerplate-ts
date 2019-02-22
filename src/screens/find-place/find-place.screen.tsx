import * as React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Types from 'Types';

import { Navigation } from 'react-native-navigation';

import { PlaceList } from '@@components/index';
import { placesSelectors } from '@@ducks/places';
import { Places } from '@@ducks/places/models';
import { DETAIL_PLACE_SCREEN } from '@@navigation/index';

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

type Props = StateProps & OwnProps;

class FindPlaceScreen extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }

  private itemSelectedHandler = (key: string): void => {
    const selectedPlace = this.props.places.find(place => place.id === key);
    const text = (selectedPlace && selectedPlace.name) || 'Place Details';

    Navigation.push(this.props.componentId, {
      component: {
        name: DETAIL_PLACE_SCREEN,
        passProps: { selectedPlace },
        options: {
          topBar: {
            title: { text },
          },
        },
      },
    });
  };
}

export default connect(mapStateToProps)(FindPlaceScreen);
