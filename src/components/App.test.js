import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('app rendering test', () => {
  it('renders the app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
