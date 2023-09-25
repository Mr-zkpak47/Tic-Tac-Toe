/* import React, { useState } from 'react'

export default function Square({value , onSquareClick}) {

  return (
    <div>
      <button className='square' onClick = {onSquareClick}>{value}</button>
    </div>
  )
}

 */

import React, { useState } from 'react'

export default function Square({value,onSquareClick}) {

  return (
    <>
      <button className="square" 
      style={{color: value === "X"?"#c0c0c0":"#00ffcc  "}}
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        onSquareClick()}}
        >{value}</button>
    </>
  )
}
