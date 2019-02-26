import * as React from 'react';
import { View } from 'react-native';

const Bounds: React.FC = props => {
  return (
    <View
      style={{
        borderWidth: 0.5,
        borderColor: 'red',
        flex: 1,
      }}
    >
      {props.children}
    </View>
  );
};

export default Bounds;
