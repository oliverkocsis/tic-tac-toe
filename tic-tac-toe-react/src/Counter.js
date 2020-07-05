import React from 'react';

function Counter(props) {
  const style = {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    marginBottom: '1rem',
  }

  const left = {
    textAlign: 'left',
    paddingLeft: '2.75rem',
  }

  const right = {
    textAlign: 'right',
    paddingRight: '2.75rem',
  }

  return (
    <div style={style}>
      <div style={left}>X</div>
      <div style={right}>O</div>
    </div>
  );
}

export default Counter;