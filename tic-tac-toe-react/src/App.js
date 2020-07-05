import React from 'react';
import Counter from './Counter';
import Grid from './Grid';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        ['X', ' ', ' '],
        ['X', ' ', ' '],
        ['X', ' ', ' ']
      ],
      x: true,
    }
  }

  onMark = (row, col) => {
    const grid = this.state.grid;
    grid[row][col] = this.state.x ? 'X' : 'O';
    this.setState({
      grid: grid,
      x: !this.state.x,
    })
  }

  render() {
    const style = {
      margin: 'auto',
      width: '30rem',
      fontSize: '7rem',
    }

    return (
      <div style={style}>
        <Counter />
        <Grid grid={this.state.grid} onMark={this.onMark} />
      </div>
    );
  }
}

export default App;
