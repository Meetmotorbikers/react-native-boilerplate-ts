import { mount } from 'enzyme';
import * as React from 'react';

import i18n from '@@locale/index';
import App from './app.component';

const WELCOME_TO_REACT_NATIVE = 'Welcome to React Native!';

describe('App', () => {
  describe('#Text', () => {
    beforeAll(() => {
      // tslint:disable-next-line: no-object-mutation
      i18n.locale = 'en';
    });
    it(`should render the text "${WELCOME_TO_REACT_NATIVE}" in our first text tag`, () => {
      const app = mount(<App />);
      const text = app
        .find('Text')
        .at(0)
        .text();

      expect(text).toEqual(WELCOME_TO_REACT_NATIVE);
    });
  });
});
