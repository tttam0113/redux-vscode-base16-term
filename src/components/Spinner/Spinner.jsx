import React from 'react';

const SIZE = 48;
const THICKNESS = 4;
const Spinner = () => (
  <div className="spinner">
    <svg viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}>
      <circle
        className="circle circle--indeterminate"
        cx={SIZE}
        cy={SIZE}
        r={(SIZE - THICKNESS) / 2}
        fill="none"
        strokeWidth={THICKNESS}
      />
    </svg>
  </div>
);

export default Spinner;
