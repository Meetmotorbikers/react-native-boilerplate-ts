import * as React from 'react';
import { TouchableHighlight } from 'react-native';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
}

const Button: React.SFC<Props> = ({ onPress, children = null }) => (
  <TouchableHighlight onPress={onPress}>
    {children}
  </TouchableHighlight>
);

export default Button
