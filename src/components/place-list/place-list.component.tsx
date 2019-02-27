import * as React from 'react';
import { FlatList } from 'react-native';

import { PlaceItem } from '@@components/index';
import { Places } from '@@ducks/places/models';

interface Props {
  readonly places: Places;
  readonly onItemSelected: (key: string) => void;
}

const PlaceList: React.FC<Props> = ({ places, onItemSelected }) => (
  <FlatList
    style={{ width: '100%' }}
    data={places}
    keyExtractor={({ id }) => id}
    renderItem={({ item: { id, name, image } }) => (
      <PlaceItem
        id={id}
        name={name}
        image={image}
        onItemPress={onItemSelected}
      />
    )}
  />
);

export default PlaceList;
