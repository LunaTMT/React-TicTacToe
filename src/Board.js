import React from 'react';
import Row from './Row';

export default function Board() {
  return (
    <div className="board">
      {[0, 3, 6].map(i => <Row key={i} startIndex={i} />)}
    </div>
  );
}
