import * as React from 'react';
import {
  Button,
  Image,
  ImageSourcePropType,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  readonly selectedPlace: null | {
    readonly image: ImageSourcePropType;
    readonly name: string;
    readonly id: string;
  };
  readonly onItemDeleted: () => void;
  readonly onModalClose: () => void;
}

const PlaceDetails: React.FC<Props> = ({
  selectedPlace,
  onItemDeleted,
  onModalClose,
}) => {
  const modalContent =
    !selectedPlace || selectedPlace === null ? null : (
      <View>
        <Image source={selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{selectedPlace.name}</Text>
      </View>
    );
  return (
    <Modal
      onRequestClose={onModalClose}
      visible={selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon name="ios-trash" size={30} color="red" />
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={onModalClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeImage: {
    width: '100%',
    height: 100,
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
  deleteButton: {
    alignItems: 'center',
  },
});

export default PlaceDetails;
