import ToyReact, { Component } from './ToyReact';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Square extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => { this.props.onClick(i) }} />;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: new Array(9).fill(''),
        }
      ],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(index) {
    const squares = this.state.history[0].squares;
    if (squares[index] || calculateWinner(squares)) return;
    squares[index] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: {
        squares,
      },
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {

    const squares = this.state.history[0].squares;
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={squares} onClick={i => this.handleClick(i)} />
        </div>
      </div>
    )
  }
}
const a = <Game />

ToyReact.render(
  a,
  document.body
)