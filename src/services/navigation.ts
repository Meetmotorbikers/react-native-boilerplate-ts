// tslint:disable: max-union-size readonly-array
import { get, isString } from 'lodash';
import * as React from 'react';
import {
  Layout,
  LayoutStackChildren,
  Navigation,
  Options,
} from 'react-native-navigation';
import { component, stack } from '../commons/Layouts';

interface Props {
  readonly componentId: string;
}

interface Self {
  readonly props: Props;
}

type SelfOrCompId =
  | string
  | {
      readonly props: Props;
    }
  | React.ComponentClass<Props>;

const compId = (selfOrCompId: SelfOrCompId): string => {
  return get(selfOrCompId, 'props.componentId', selfOrCompId);
};

const push = (
  selfOrCompId: SelfOrCompId,
  screen: string | Layout
): Promise<any> => {
  return Navigation.push(
    compId(selfOrCompId),
    isString(screen) ? component(screen) : screen
  );
};
const pushExternalComponent = (
  self: Self,
  name: string | number,
  passProps?: object
) => {
  return Navigation.push(self.props.componentId, {
    externalComponent: {
      name,
      passProps,
    },
  });
};

const pop = (selfOrCompId: SelfOrCompId): Promise<any> =>
  Navigation.pop(compId(selfOrCompId));

const showModal = (
  screen: string | string[] | LayoutStackChildren | LayoutStackChildren[]
): Promise<any> => {
  const layout = isString(screen) ? stack(screen) : screen;

  return Navigation.showModal(layout as Layout);
};

const dismissModal = (selfOrCompId: SelfOrCompId): Promise<any> =>
  Navigation.dismissModal(compId(selfOrCompId));

const dismissAllModals = () => Navigation.dismissAllModals();

const showOverlay = (
  name: string | LayoutStackChildren,
  options: Options
): Promise<any> => {
  const layout: Layout = component(name, options);
  return Navigation.showOverlay(layout);
};

const dismissOverlay = (name: string): Promise<any> =>
  Navigation.dismissOverlay(name);

const popToRoot = (self: Self): Promise<any> =>
  Navigation.popToRoot(self.props.componentId);

const mergeOptions = (self: Self, options: Options): void =>
  Navigation.mergeOptions(self.props.componentId, options);

const setStackRoot = (self: Self, root: Layout | Layout[]): Promise<any> =>
  Navigation.setStackRoot(self.props.componentId, root);

export default {
  mergeOptions,
  push,
  pushExternalComponent,
  pop,
  popToRoot,
  showModal,
  dismissModal,
  dismissAllModals,
  showOverlay,
  dismissOverlay,
  setStackRoot,
  events: Navigation.events.bind(Navigation),
  popTo: Navigation.popTo.bind(Navigation),
  setDefaultOptions: Navigation.setDefaultOptions.bind(Navigation),
  setRoot: Navigation.setRoot.bind(Navigation),
};
