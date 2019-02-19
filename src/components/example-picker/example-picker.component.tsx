import * as React from 'react';
import { Picker, Platform } from 'react-native';

export interface Example {
  readonly name: string;
  readonly getJson: () => AnimationObject;
  readonly width?: number;
}

interface Props {
  readonly example: Example;
  readonly onChange: (itemValue: any, itemPosition: number) => void;
  readonly examples: ReadonlyArray<Example>;
}

export default class LottieExamplePicker extends React.Component<Props> {
  render(): JSX.Element {
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
        {this.props.examples.map(ex => (
          <Picker.Item key={ex.name} label={ex.name} value={ex} />
        ))}
      </Picker>
    );
  }
}
