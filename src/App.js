
import './App.css';
import { useState } from 'react';



function Square({ value, onSquareClick }) {
  return (
  <button className="square" onClick={onSquareClick}>{value}</button>
  )
}
 


function Board() {
  const [ xIsNext, setXIsNext ] = useState(true)
  const [ squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
  <>
  <div>
  <div className="board-row">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} id="1"/>
    <Square value={squares[1]} onSquareClick={() => handleClick(1)} id="2"/>
    <Square value={squares[2]} onSquareClick={() => handleClick(2)} id="3"/>
    </div>
    <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} id="3"/>
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} id="4"/>
    <Square value={squares[5]} onSquareClick={() => handleClick(5)} id="5"/>
    </div>
    <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)} id="6"/>
    <Square value={squares[7]} onSquareClick={() => handleClick(7)} id="7"/>
    <Square value={squares[8]} onSquareClick={() => handleClick(8)} id="8"/>
    </div>
    </div>
    </>
  )
}



function App() {
  return (
    <>
    <div className="container">
    <div className="tictactoeapp">    
    <span className="title">Nics Tic-Tac-Toe App</span>
    <div className="app"><Board /></div>
    <div className="title">Win Condition</div>
    </div>
    </div>
    </>
  );
}

export default App;
