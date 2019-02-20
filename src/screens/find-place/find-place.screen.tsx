import * as React from 'react';
import { Text, View } from 'react-native';

interface Props {
  readonly componentId: string;
}
export default class FindPlaceScreen extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <View>
        <Text>On FindPlaceScreen</Text>
      </View>
    );
  }
}
