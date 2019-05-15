import React from 'react';
import { shallow } from 'enzyme';
import Incrementor from './Incrementor.js';

describe('incrementor test', () => {
  it('renders an incrementor', () => {
    const wrapper = shallow(<Incrementor />);
    expect(wrapper).toMatchSnapshot();
  }); 
});
