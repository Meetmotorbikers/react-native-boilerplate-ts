import * as React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface Props {
  readonly style?: StyleProp<ViewStyle>;
  readonly componentId: string;
  readonly footer?: string;
}

const Root: React.FC<Props> = props => (
  <View style={[props.style, styles.root]}>
    {props.children}
    {props.componentId && (
      <View style={styles.footer}>
        {props.footer && <Text style={styles.footerText}>{props.footer}</Text>}

        <Text style={styles.footerText}>
          {`this.props.componentId = ${props.componentId}`}
        </Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    color: '#888',
    marginTop: 10,
  },
});

export default Root;
