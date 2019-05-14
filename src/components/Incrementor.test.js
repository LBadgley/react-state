import React from 'react';
import { shallow } from 'enzyme';
const Incrementor from './Incrementor.js';

describe('incrementor test', () => {
  it('renders an incrementor', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  }); 
});
