import * as React from 'react';
import styled from 'styled-components/native';

interface Props {
  readonly children: React.ReactNode;
}

const CenterView: React.SFC<Props> = ({ children = null }) => (
  <MainView>{children}</MainView>
);

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

export default CenterView;
