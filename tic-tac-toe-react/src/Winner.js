import React from 'react';

function Winner(props) {
  let style = {
    margin: 'auto',
    width: '100%',
    marginTop: '1rem',
    textAlign: 'center',
    verticalAlign: 'middle',

  }

  return <div style={style}>{props.winner} won</div>;
}

export default Winner;