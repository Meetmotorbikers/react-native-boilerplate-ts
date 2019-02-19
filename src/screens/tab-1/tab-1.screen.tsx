import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components/native';

import { pushTutorialScreen } from '@@navigation/index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Copy = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: paleturquoise;
`;

interface Props {
  readonly data: {};
}
class Tab1Screen extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }: { readonly buttonId: string }): void {
    switch (buttonId) {
      case 'nav_logout_btn': {
        pushTutorialScreen();
        break;
      }

      case 'nav_user_btn': {
        break;
      }

      default:
        break;
    }
  }

  render(): JSX.Element {
    return (
      <Wrapper>
        <Copy>Play top buttons!</Copy>
      </Wrapper>
    );
  }
}

export default Tab1Screen;
