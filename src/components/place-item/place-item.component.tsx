import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Place } from '@@ducks/places/models';

type Props = {
  readonly onItemPress: (id: string) => void;
} & Place;

const listItem: React.FC<Props> = ({ name, id, image, onItemPress }) => {
  const handleOnPress = () => onItemPress(id);
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.listItem}>
        <Image source={image} style={styles.placeImage} />
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30,
  },
});

export default listItem;
