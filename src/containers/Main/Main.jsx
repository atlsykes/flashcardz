import React from 'react'
import './Main.css'
let id = 0

const Main = () => {
  return (
    <div className='main'>
      <div class='card'>
        <div class='card-body'>
          <h5 class='card-title'>Card# {id}</h5>
          <h6 class='card-subtitle mb-2 text-muted'>Question</h6>
          <p class='card-text'>Answer</p>
        </div>
      </div>
    </div>
  )
}

export default Main
