import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import Swatch from './components/Swatch';
import Terminal from './components/Terminal';
import Tools from './components/Tools';

const Theme = ({ activeTheme }) => {
  if (!activeTheme) {
    return <Spinner />;
  }

  const { name, colors } = activeTheme;

  return (
    <main className="theme" style={{ backgroundColor: colors['terminal.background'] }}>
      <div>
        <h2 style={{ color: colors['terminal.foreground'] }}>{name}</h2>
        <Swatch colors={colors} />
        <Terminal colors={colors} />
        <Tools colors={colors} />
      </div>
    </main>
  );
};

Theme.propTypes = {
  activeTheme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Theme;
