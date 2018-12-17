import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Tools = ({ colors }) => {
  const snippet = JSON.stringify(colors)
    .slice(1, -1)
    .split(',')
    .join(',\n');

  return (
    <div className="tools padded">
      <CopyToClipboard text={snippet}>
        <button
          type="button"
          style={{
            color: colors['terminal.background'],
            backgroundColor: colors['terminal.foreground'],
          }}
        >
          Copy to clipboard
        </button>
      </CopyToClipboard>
    </div>
  );
};

Tools.propTypes = {
  colors: PropTypes.object.isRequired,
};

export default Tools;
