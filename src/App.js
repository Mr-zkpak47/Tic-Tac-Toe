import React from 'react'
import "./App.css"
import Square from './Components/Square'
import Board from './Components/Board'
import Game from './Components/Game'

export default function App() {
  return (
    <>
    <h1 className="heading mb-5">
      Tic Tac Toe
    </h1>
      <div className="game">
        <Game />
      </div>
    </>
  )
}
