import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

it('should render Spinner correctly', () => {
  const wrapper = shallow(<Spinner />);

  expect(wrapper).toMatchSnapshot();
});
