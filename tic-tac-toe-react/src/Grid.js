import React from 'react';
import Space from './Space'

function Grid(props) {
  const style = {
    margin: 'auto',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '11rem 11rem 11rem',
  }

  return (
    <div style={style}>
      {
        props.grid.map((row, i) => row.map((space, j) => <Space key={`${i}-${j}`} mark={space} row={i} col={j} onMark={props.onMark}/>))
      }
    </div>
  );
}

export default Grid;