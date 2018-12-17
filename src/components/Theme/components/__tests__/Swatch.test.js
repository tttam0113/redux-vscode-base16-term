import React from 'react';
import { shallow } from 'enzyme';
import themes from 'tests/fixtures/themes';
import Swatch from '../Swatch';

it('should render Swatch component correctly', () => {
  const wrapper = shallow(<Swatch colors={themes[1].colors} />);

  expect(wrapper).toMatchSnapshot();
});
