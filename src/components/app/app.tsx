import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { PlaceDetail, PlaceInput, PlaceList } from '../index';

import { Props } from './index';

export interface OwnProps {}

export default class App extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClose={this.modalClosedHandler}
        />
        <PlaceInput onAdd={this.placeSubmitHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }

  private placeSubmitHandler = (value: string): void => {
    if (value.trim() === '') return;
    this.props.onAddPlace(value);
  };

  private placeSelectedHandler = (key: string): void =>
    this.props.onSelectPlace(key);

  private placeDeletedHandler = (): void => this.props.onDeletePlace();

  private modalClosedHandler = (): void => this.props.onDeselectPlace();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  listContainer: {
    width: '100%',
  },
});
