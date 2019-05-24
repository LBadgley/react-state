import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('random color test', () => {
  it('renders a random color', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
