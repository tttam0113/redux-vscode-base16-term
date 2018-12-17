import React from 'react';
import { shallow } from 'enzyme';
import themes from 'tests/fixtures/themes';
import Tools from '../Tools';

it('should render Tools component correctly', () => {
  const wrapper = shallow(<Tools colors={themes[1].colors} />);

  expect(wrapper).toMatchSnapshot();

  const buttonStyles = wrapper.find('button').prop('style');
  expect(buttonStyles).toEqual({
    color: themes[1].colors['terminal.background'],
    backgroundColor: themes[1].colors['terminal.foreground'],
  });
});
