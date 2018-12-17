import React from 'react';
import { shallow } from 'enzyme';
import themes from 'tests/fixtures/themes';
import Terminal from '../Terminal';

it('should render Terminal component correctly', () => {
  const wrapper = shallow(<Terminal colors={themes[2].colors} />);

  expect(wrapper).toMatchSnapshot();
});
