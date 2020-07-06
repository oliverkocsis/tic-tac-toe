import React from 'react';

function Winner(props) {
  let style = {
    margin: 'auto',
    width: '100%',
    marginTop: '1rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: '4rem',
  }

  return <div style={style}>The winner is: {props.winner}</div>;
}

export default Winner;