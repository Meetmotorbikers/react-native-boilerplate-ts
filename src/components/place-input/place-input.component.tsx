import * as React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface Props {
  readonly onAdd: (value: string) => void;
}
interface State {
  readonly value: string;
}

export default class PlaceInput extends React.Component<Props, State> {
  state: State = { value: '' };

  render(): JSX.Element {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An awesome place"
          onChangeText={this.handleInputChange}
          value={this.state.value}
          onSubmitEditing={this.handleSubmitEditing}
        />
        <Button title="Add" onPress={this.onInputSubmit} />
      </View>
    );
  }

  private handleInputChange = (value: string): void => this.setState({ value });

  private onInputSubmit = () => {
    this.props.onAdd(this.state.value);
  };

  private handleSubmitEditing = (): void => {
    this.onInputSubmit();
  };
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});
