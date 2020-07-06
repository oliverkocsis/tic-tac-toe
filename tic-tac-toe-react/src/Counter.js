import React from 'react';

function Counter(props) {
  const style = {
    margin: 'auto',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '11rem 11rem 11rem',
    marginBottom: '1rem',
    textAlign: 'center',
    verticalAlign: 'middle',
  }

  let styleX;
  let styleO;

  if (props.current === 'o') {
    styleX = {
      color: '#d8dee9',
    }
  } else {
    styleO = {
      color: '#d8dee9',
    }
  }

  return (
    <div style={style}>
      <div style={styleX}>x</div>
      <div>&nbsp;</div>
      <div style={styleO}>o</div>
    </div>
  );
}

export default Counter;