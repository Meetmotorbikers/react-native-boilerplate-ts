import * as React from 'react';
import { Button } from 'react-native';

import { Root } from '@@components/index';
import testIDs from '@@constants/testIDs';
import * as Screens from '@@navigation/screens';
import Navigation from 'src/services/navigation';

interface Props {
  readonly componentId: string;
}
export default class NavigationScreen extends React.Component<Props> {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Navigation',
        },
      },
      bottomTab: {
        text: 'Navigation',
        icon: require('src/assets/images/navigation.png'),
        testID: testIDs.NAVIGATION_TAB,
      },
    };
  }

  render(): JSX.Element {
    return (
      <Root componentId={this.props.componentId}>
        <Button
          title="Modal"
          testID={testIDs.MODAL_BTN}
          onPress={this.showModal}
        />
        <Button
          title="Overlay"
          testID={testIDs.OVERLAY_BTN}
          onPress={this.showOverlay}
        />
        <Button
          title="External Component"
          testID={testIDs.EXTERNAL_COMP_BTN}
          onPress={this.externalComponent}
        />
        <Button
          title="Static Events"
          testID={testIDs.SHOW_STATIC_EVENTS_SCREEN}
          onPress={this.pushStaticEventsScreen}
        />
        <Button
          title="Orientation"
          testID={testIDs.SHOW_ORIENTATION_SCREEN}
          onPress={this.orientation}
        />
      </Root>
    );
  }
  private orientation = () => Navigation.showModal(Screens.Orientation);
  private pushStaticEventsScreen = () =>
    Navigation.showModal(Screens.EventsScreen);
  private externalComponent = () =>
    Navigation.showModal(Screens.ExternalComponent);

  private showModal = () => Navigation.showModal(Screens.Modal);
  private showOverlay = () => Navigation.showModal(Screens.Overlay);
}
