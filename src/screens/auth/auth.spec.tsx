import { shallow } from 'enzyme';
import * as React from 'react';
import AuthScreen from './auth.screen';

describe('AuthScreen', () => {
  const wrapper = shallow(<AuthScreen componentId={'AuthScreen'} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains a clickable button', () => {
    const button = wrapper.exists(`Button[testID="loginBtn"]`);

    expect(button).toBe(true);
  });
});
