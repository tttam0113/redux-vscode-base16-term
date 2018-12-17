import React from 'react';
import { shallow } from 'enzyme';
import themes from 'tests/fixtures/themes';
import Theme from './Theme';

it('should render Theme component correctly without activeTheme', () => {
  const wrapper = shallow(<Theme />);

  expect(wrapper).toMatchSnapshot();
});

it('should render Theme component correctly with activeTheme', () => {
  const activeTheme = themes[2];
  const wrapper = shallow(<Theme activeTheme={activeTheme} />);

  expect(wrapper).toMatchSnapshot();
  // render enough children
  expect(wrapper.find('Swatch').length).toBe(1);
  expect(wrapper.find('Terminal').length).toBe(1);
  expect(wrapper.find('Tools').length).toBe(1);
});

it('should render Theme\'s children components correctly with activeTheme', () => {
  const activeTheme = themes[2];
  const wrapper = shallow(<Theme activeTheme={activeTheme} />);

  const swatchColors = wrapper.find('Swatch').first().prop('colors');
  expect(swatchColors).toEqual(activeTheme.colors);

  const terminalColors = wrapper.find('Terminal').first().prop('colors');
  expect(terminalColors).toEqual(activeTheme.colors);

  const toolsColors = wrapper.find('Tools').first().prop('colors');
  expect(toolsColors).toEqual(activeTheme.colors);
});
