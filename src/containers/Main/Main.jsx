import content from './content'
import React, { useState } from 'react'
import './Main.css'
let newCount = 0

const Main = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    console.log(`content length = ${content.length}`)
    newCount++
    if (newCount == content.length) {
      newCount--
      alert('You have reached the end!')
      return
    }
    setCount(newCount)
    console.log(`newCount = ${newCount}`)
  }

  const reset = () => {
    newCount = 0
    setCount(newCount)
    console.log(`newCount reset`)
  }

  return (
    <div className='main'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Card# {content[count].id}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>
            {content[count].question}
          </h6>
          <p className='card-text'>{content[count].answer}</p>
        </div>
      </div>
      <br />
      <button type='button' className='btn btn-info' onClick={increment}>
        Next
      </button>
      <br />
      <button type='button' className='btn btn-warning' onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default Main
