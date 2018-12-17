import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ activeTheme }) => {
  const styles = activeTheme
    ? {
        color: activeTheme.colors['terminal.background'],
        backgroundColor: activeTheme.colors['terminal.ansiBlue'],
      }
    : {};

  return (
    <header className="padded" style={styles}>
      <h1>
        Base16 Terminal Colors <small>for Visual Studio Code</small>
      </h1>
      <p>
        Select a theme & copy/paste the properties under «{' '}
        <a
          href="https://code.visualstudio.com/docs/getstarted/theme-color-reference"
          target="_blank"
          rel="noopener noreferrer"
        >
          workbench.colorCustomizations
        </a>{' '}
        » in your user settings
      </p>
      <p>
        <small>
          Made with ❤ by{' '}
          <a
            href="https://github.com/Glitchbone/vscode-base16-term"
            target="_blank"
            rel="noopener noreferrer"
          >
            Glitchbone
          </a>{' '}
          « Original source
        </small>
      </p>
      <p>
        <small>
          Redux version in{' '}
          <a href="https://github.com/tttam0113" target="_blank" rel="noopener noreferrer">
            here
          </a>{' '}
          « Made by me :D
        </small>
      </p>
    </header>
  );
};

Header.propTypes = {
  activeTheme: PropTypes.object,
};
export default Header;
