import React from 'react';
import { shallow } from 'enzyme';
import themes from 'tests/fixtures/themes';
import Nav from './Nav';

it('should render Nav component correctly', () => {
  const wrapper = shallow(<Nav items={themes} />);

  expect(wrapper).toMatchSnapshot();
  // expect Nav render enough items
  expect(wrapper.children().length).toBe(themes.length);
});
