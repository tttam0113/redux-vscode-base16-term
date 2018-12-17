import React from 'react';
import PropTypes from 'prop-types';

const Span = ({ color, text, backgroundColor = 'transparent', space = false }) => (
  <span style={{ color, backgroundColor }}>
    {space && <span>&nbsp;</span>}
    {text}
    {space && <span>&nbsp;</span>}
  </span>
);

Span.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string.isRequired,
  space: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

const Terminal = ({ colors }) => {
  const {
    'terminal.background': background,
    'terminal.foreground': foreground,
    'terminal.ansiBlue': ansiBlue,
    'terminal.ansiYellow': ansiYellow,
    'terminalCursor.foreground': cursorForeground,
    'terminalCursor.background': cursorBackground,
  } = colors;

  return (
    <div className="terminal">
      <div
        className="terminal__screen"
        style={{
          backgroundColor: background,
          borderColor: foreground,
        }}
      >
        <Span color={foreground} text={'username@user-computer'} />
        <Span color={background} backgroundColor={ansiBlue} text={'\ue0b0'} />
        <Span color={background} backgroundColor={ansiBlue} text={'~/redux-vscode-base16-term'} space />
        <Span color={ansiBlue} backgroundColor={ansiYellow} text={'\ue0b0'} />
        <Span color={background} backgroundColor={ansiYellow} text={'\ue0a0 master'} space />
        <Span color={ansiYellow} text={'\ue0b0'} />
        <Span color={cursorForeground} text={'ls'} space />
        <Span color={cursorBackground} text={'█'} />
      </div>
    </div>
  );
};

Terminal.propTypes = {
  colors: PropTypes.object.isRequired,
};

export default Terminal;
