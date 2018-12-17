import React from 'react';
import { shallow } from 'enzyme';
import themes from 'tests/fixtures/themes';
import Header from './Header';

it('should render Header component correctly without activeTheme', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});

it('should render Header component correctly with activeTheme', () => {
  const activeTheme = themes[0];
  const wrapper = shallow(<Header activeTheme={activeTheme} />);

  expect(wrapper).toMatchSnapshot();

  const header = wrapper.find('header').first();
  const headerStyle = header.prop('style');

  expect(headerStyle).toEqual({
    color: activeTheme.colors['terminal.background'],
    backgroundColor: activeTheme.colors['terminal.ansiBlue'],
  });
});
