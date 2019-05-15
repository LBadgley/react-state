import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('color display test', () => {
  it('displays the color', () => {
    const wrapper = shallow(<ColorDisplay color="blue"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
