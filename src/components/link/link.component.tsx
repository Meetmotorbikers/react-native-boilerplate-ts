import * as React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

interface Props {
  readonly onPress?: (event?: GestureResponderEvent) => void;
  readonly children: React.ReactElement<Text> | string;
}

const Link: React.FC<Props> = ({ onPress, children, ...rest }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={{ color: '#e01f1f' }} {...rest}>
      {children}
    </Text>
  </TouchableOpacity>
);

export default Link;
