/* import React, { useState } from 'react'
import Square from './Square'

export default function Board({xIsNext,squares,onPlay}) {
  // const [xISNext,setXIsNext] = useState(true)
  // const [squares, setSquares] = useState(Array(9).fill(null))
  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice()
    if(xIsNext){
      nextSquares[i] = "X"
    }else{
      nextSquares[i] = "O"
    }
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner" + winner;
  }else{
    status = "Next Player : " + (xIsNext?"X":"O");
  }
  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for(let i = 0 ; i < lines.length ; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  return (
    <div className='board'>
       <div className="status">{status}</div>
      <div className="flex">
        <div className="items item"><Square onSquareClick={() => handleClick(0)} value={squares[0]} /></div>
        <div className="items item"><Square onSquareClick={() => handleClick(1)} value={squares[1]} /></div>
        <div className="items item"><Square onSquareClick={() => handleClick(2)} value={squares[2]} /></div>
      </div>
      <div className="flex">
        <div className="items item"><Square onSquareClick={() => handleClick(3)} value={squares[3]} /></div>
        <div className="items item"><Square onSquareClick={() => handleClick(4)} value={squares[4]} /></div>
        <div className="items item"><Square onSquareClick={() => handleClick(5)} value={squares[5]} /></div>
      </div>
      <div className="flex">
        <div className="items item"><Square onSquareClick={() => handleClick(6)} value={squares[6]} /></div>
        <div className="items item"><Square onSquareClick={() => handleClick(7)} value={squares[7]} /></div>
        <div className="items item"><Square onSquareClick={() => handleClick(8)} value={squares[8]} /></div>
      </div>
    </div>
  )
}
 */

import React, { useState } from 'react'
import Square from './Square'

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const handleCLick = (i) => {
    const nextSquares = squares.slice()
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return(squares[a])
      }
    }
    return;
  }
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner : " + winner;
  }else{
    status = "Next Player : " + (xIsNext ? "X" : "O")
  }
  return (
    <div>
      <div className={`status ${status === "Winner" + winner ? "":""}`}>
        {status}
      </div>
      <div className="grid">
        <div className="items"><Square value={squares[0]} onSquareClick={() => handleCLick(0)} /></div>
        <div className="items"><Square value={squares[1]} onSquareClick={() => handleCLick(1)} /></div>
        <div className="items"><Square value={squares[2]} onSquareClick={() => handleCLick(2)} /></div>
        <div className="items"><Square value={squares[3]} onSquareClick={() => handleCLick(3)} /></div>
        <div className="items"><Square value={squares[4]} onSquareClick={() => handleCLick(4)} /></div>
        <div className="items"><Square value={squares[5]} onSquareClick={() => handleCLick(5)} /></div>
        <div className="items"><Square value={squares[6]} onSquareClick={() => handleCLick(6)} /></div>
        <div className="items"><Square value={squares[7]} onSquareClick={() => handleCLick(7)} /></div>
        <div className="items"><Square value={squares[8]} onSquareClick={() => handleCLick(8)} /></div>
      </div>
    </div>
  )
}
