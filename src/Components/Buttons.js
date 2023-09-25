import React from 'react'

export default function Buttons() {
  return (
    <div className='container d-flex justify-content-center flex-row gap-2 gap-5'>
      <button className="btn btn-primary" style = {{backgroundColor:"#3d7bf4",border:"none",color:"white"}}>
        Play
      </button>
      <button className="btn btn-danger" style={{backgroundColor:"#c0c0c0",border:"none",color:"#0b0d21"}}>
        Reset
      </button>
    </div>
  )
}
