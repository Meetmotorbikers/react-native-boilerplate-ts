import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';

interface Props {
  readonly children: React.ReactNode;
}
class AppStoreProvider extends React.PureComponent<Props> {
  render(): React.ReactNode {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default AppStoreProvider;
