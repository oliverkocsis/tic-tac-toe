import React from 'react';
import Space from './Space'

function Grid(props) {
  const style = {
    margin: 'auto',
    width: '30rem',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
  }

  return (
    <div style={style}>
      {
        props.grid.map((row, i) => row.map((space, j) => <Space mark={space} row={i} col={j} onMark={props.onMark}/>))
      }
    </div>
  );
}

export default Grid;