import { shallow } from 'enzyme';
import React from 'react';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('definizione base', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toBeDefined();
  });
});
