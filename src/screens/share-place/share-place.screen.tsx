import * as React from 'react';
import { Text, View } from 'react-native';

interface Props {
  readonly componentId: string;
}
export default class SharePlaceScreen extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <View>
        <Text>On SharePlaceScreen</Text>
      </View>
    );
  }
}
