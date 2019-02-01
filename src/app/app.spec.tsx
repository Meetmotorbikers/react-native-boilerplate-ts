// tslint:disable no-expression-statement import-name

import { mount, shallow } from 'enzyme';
import * as React from 'react';

import App from 'src/app';

const WELCOME_TO_REACT_NATIVE = 'Welcome to React Native!';

describe('App', () => {
  describe('#Text', () => {
    it(`should render the text "${WELCOME_TO_REACT_NATIVE}" in our first text tag`, () => {
      const app = mount(<App />);
      const text = app
        .find('Text')
        .at(0)
        .text();

      expect(text).toEqual(WELCOME_TO_REACT_NATIVE);
    });
  });

  describe('#Button', () => {
    it('should render a touchable icon', () => {
      const app = shallow(<App />);
      const icon = app
        .findWhere(node => node.prop('testID') === 'testButton')
        .first();
      expect(icon).toExist();
    });
  });
});
