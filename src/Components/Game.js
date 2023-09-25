/* import React, { useState } from 'react'
import Board from './Board'

export default function Game() {
    const [xIsNext,setXIsNext] = useState(true)
    const [history,setHistory] = useState([Array(9).fill(null)])
    const [currentMove,setCurrentMove] = useState(0)
    const currentSquares = history[history.length - 1]
    
    function handlePlay(nextSquares){
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove){
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });
  return (
    <div className='row'>
        <div className="col-col-sm-2">
      <Board xIsNext = {xIsNext} squares = {currentSquares} onPlay = {handlePlay}/>
        </div>
        <div className="gameInfo col-col-sm-2">
      <ol>{moves}</ol>
        </div>
    </div>
  )
}
 */

import React from 'react'
import Board from './Board'
import Buttons from './Buttons'

export default function Game() {
  return (
    <>
      <div className="container gap-5">
        <Board/>
        <Buttons/>
      </div>
    </>
  )
}
