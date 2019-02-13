import * as React from 'react';
import styled from "styled-components/native";

interface Props {
  children: React.ReactNode;
}

const CenterView: React.SFC<Props> = ({ children = null }) => <MainView>{children}</MainView>;

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF
`;

export default CenterView;
