import * as React from 'react';
import { TouchableHighlight } from 'react-native';

interface Props {
  readonly children: React.ReactNode;
  readonly onPress: () => void;
}

const Button: React.SFC<Props> = ({ onPress, children = null }) => (
  <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
);

export default Button;
