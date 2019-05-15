import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('color picker test', () => {
  it('renders the selected color', () => {
    const wrapper = shallow(<ColorPicker colors={['red', 'blue', 'yellow']}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
