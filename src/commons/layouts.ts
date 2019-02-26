// tslint:disable: variable-name readonly-array
import { isArray, isString } from 'lodash';
import { Layout, LayoutStackChildren, Options } from 'react-native-navigation';
type Component = string | LayoutStackChildren;

export const stack = (
  rawChildren: Component[] | Component,
  id?: string
): Layout<{}> => {
  const childrenArray = isArray(rawChildren) ? rawChildren : [rawChildren];

  const children: LayoutStackChildren[] = childrenArray.map(child =>
    component(child)
  );
  return {
    stack: {
      children,
      id,
    },
  };
};

export const component = (
  _component: Component,
  options?: Options
): LayoutStackChildren => {
  return isString(_component)
    ? {
        component: {
          options,
          name: _component,
        },
      }
    : _component;
};
