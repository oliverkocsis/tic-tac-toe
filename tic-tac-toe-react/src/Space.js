import React from 'react';

function Space(props) {
  let style = {
    textAlign: 'center',
    verticalAlign: 'middle',
  }

  if (props.row < 2) {
    style = {
      ...style,
      borderBottom: '1px solid #d8dee9',
    }
  }

  if (props.col < 2) {
    style = {
      ...style,
      borderRight: '1px solid #d8dee9',
    }
  }

  return <div style={style} onClick={(e) => props.onMark(props.row, props.col)}>{props.mark}</div>;
}

export default Space;