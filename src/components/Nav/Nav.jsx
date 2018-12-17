import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = ({ items }) => (
  <nav>
    {items.map(item => (
      <NavLink key={item.id} to={`/${item.id}`}>
        {item.name}
      </NavLink>
    ))}
  </nav>
);

Nav.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Nav;
