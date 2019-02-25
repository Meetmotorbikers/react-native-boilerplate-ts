import * as React from 'react';
import { GestureResponderEvent, Text } from 'react-native';
import styled from 'styled-components/native';

import { Link } from '@@components/index';

const FooterWrapper = styled.View`
  width: 100%;
  background-color: #eef0f3;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

interface Props {
  readonly title: string;
  readonly actionCopy: string;
  readonly onPress?: (event?: GestureResponderEvent) => void;
}

const AuthFooter: React.FC<Props> = ({ title, actionCopy, onPress }) => (
  <FooterWrapper>
    <Text>{title}</Text>
    <Link onPress={onPress}>{actionCopy}</Link>
  </FooterWrapper>
);

export default AuthFooter;
