import * as React from 'react';
import { View } from 'react-native';
import Animation from 'lottie-react-native';
import styled from "styled-components/native";

export default class LottieLoader extends React.Component {
  private animation = React.createRef<Animation>()
  componentDidMount() {
    const animation = this.animation.current;
    if (animation) {
      animation.play()
    }
  }

  render() {
    return (
      <Container>
        <WelcomeCopy>Welcome to Lottie Animations :-)</WelcomeCopy>
        <View>
          <StyledAnimation
            ref={this.animation}
            loop={true}
            source={require('../../assets/animations/793-cycle-animation.json')}
          />
        </View>

      </Container>
    );
  }
}


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items:center;
  background-color: #ffffff;
`;


const WelcomeCopy = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
  color: paleturquoise;
`;

const StyledAnimation = styled(Animation)`
  width: 100%;
`;
