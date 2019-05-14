import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('color rendering tests', () => {
  it('renders the color buttons', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
