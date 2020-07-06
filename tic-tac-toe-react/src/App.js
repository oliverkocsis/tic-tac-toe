import React from 'react';
import { TicTacToe } from 'tic-tac-toe-core';
import Counter from './Counter';
import Grid from './Grid';
import Winner from './Winner';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: new TicTacToe()
    }
  }

  onMark = (row, col) => {
    const game = this.state.game;
    let winner;
    if (this.state.winner) {
      winner = undefined;
      game.reset();
    } else {
      try {
        winner = game.next(row, col);
        console.info(winner);
      } catch (error) {
        console.error(error);
      }
    }

    this.setState({
      game: game,
      winner: winner,
    });
  }

  render() {
    const style = {
      margin: 'auto',
      width: '33rem',
      fontSize: '7rem',
    }

    let winner;
    if (this.state.winner) {
      winner = <Winner winner={this.state.winner} />;
    }

    return (
      <div style={style}>
        <Counter current={this.state.game.current()} />
        <Grid grid={this.state.game.view()} onMark={this.onMark} />
        {winner}
        <p style={{ fontSize: '0.75rem', textAlign: 'center', marginTop: '3.5rem'}}><a href="https://github.com/oliverkocsis/tic-tac-toe">https://github.com/oliverkocsis/tic-tac-toe</a></p>
      </div>
    );
  }
}

export default App;
