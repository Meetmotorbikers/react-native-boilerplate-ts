import * as React from 'react';
import { Picker, Platform } from 'react-native';


export interface IExample {
  name: string;
  getJson: () => AnimationObject;
  width?: number;
}

interface Props {
  example: IExample;
  onChange: (itemValue: any, itemPosition: number) => void;
  examples: IExample[];
}


export default class LottieExamplePicker extends React.Component<Props> {
  render() {
    return (
      <Picker
        selectedValue={this.props.example}
        onValueChange={this.props.onChange}
        style={{
          marginBottom: Platform.select({
            ios: -30,
            android: 0,
          }),
        }}
      >
        {this.props.examples.map(ex => <Picker.Item key={ex.name} label={ex.name} value={ex} />)}
      </Picker>
    );
  }
}
