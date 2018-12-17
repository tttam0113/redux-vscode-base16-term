import React from 'react';
import PropTypes from 'prop-types';

const Swatch = ({ colors }) => {
  const swatchColors = [
    'ansiBlack',
    'ansiBlue',
    'ansiBrightBlack',
    'ansiBrightBlue',
    'ansiBrightCyan',
    'ansiBrightGreen',
    'ansiBrightMagenta',
    'ansiBrightRed',
    'ansiBrightWhite',
    'ansiBrightYellow',
    'ansiCyan',
    'ansiGreen',
    'ansiMagenta',
    'ansiRed',
    'ansiWhite',
    'ansiYellow',
  ];

  return (
    <div className="swatch padded">
      {swatchColors.map((key, i) => (
        <div
          className="swatch__color"
          key={key}
          style={{
            backgroundColor: colors[`terminal.${key}`],
            borderColor: i === 0 ? colors['terminal.foreground'] : colors[`terminal.${key}`],
          }}
        />
      ))}
    </div>
  );
};

Swatch.propTypes = {
  colors: PropTypes.object.isRequired,
};
export default Swatch;
