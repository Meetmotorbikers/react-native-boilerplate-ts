import * as React from 'react';
import styled from "styled-components/native";

const Wrapper = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: center;
`;

const Header = styled.Text`
  font-size: 18;
  margin-bottom: 18;
`;

const Content = styled.Text`
  font-size: 12;
  margin-bottom: 10;
  line-height: 18;
`;


const Welcome: React.SFC<{}> = () => {
  return (
    <Wrapper>

      <Header>Welcome to React Native Storybook</Header>

      <Content>
        This is a UI Component development environment for your React Native app. Here you can
        display and interact with your UI components as stories. A story is a single state of one
        or more UI components. You can have as many stories as you want. In other words a story is
        like a visual test case.
      </Content>

      <Content>
        We have added some stories inside the "scr/stories" directory for examples. Try
        editing the "src/stories/Welcome.tsx" file to edit this message.
        </Content>
    </Wrapper>
  );
}

export default Welcome;
