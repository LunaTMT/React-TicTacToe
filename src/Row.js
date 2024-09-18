import React from 'react';
import Square from './Square';

function Row({ startIndex }) {
  return (
    <div className="row">
      {[0, 1, 2].map(i => <Square key={startIndex + i} index={startIndex + i} />)}
    </div>
  );
}

export default Row;
