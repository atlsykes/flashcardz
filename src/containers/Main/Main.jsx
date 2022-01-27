import content from './content'
import React, { useState } from 'react'
import './Main.css'
let newCount = 0
let newScore = 0

const Main = () => {
  const [count, setCount] = useState(0)
  const [reveal, setReveal] = useState(false)
  const [score, setScore] = useState(0)

  const increment = () => {
    setReveal(false)
    console.log(`content length = ${content.length}`)
    newCount++
    if (newCount === content.length) {
      newCount--
      alert('You have reached the end!')
      return
    }
    setCount(newCount)
    console.log(`newCount = ${newCount}`)
  }

  const reset = () => {
    newScore = 0
    setReveal(false)
    newCount = 0
    setCount(newCount)
    console.log(`newCount reset`)
  }

  const showAnswer = () => {
    setReveal(true)
  }

  return (
    <div className='main'>
      <div>
        <h5>Score: {newScore}</h5>
      </div>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Card# {content[count].id}</h5>
          <br />
          <h6 className='card-subtitle mb-2 text-muted'>
            {content[count].question}
          </h6>
          <br />
          <button onClick={showAnswer}>show</button>
          <br />
          <br />
          {reveal === true ? (
            <p className='card-text'>{content[count].answer}</p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <br />
      <button type='button' className='btn btn-info' onClick={increment}>
        Next
      </button>
      <br />
      <span>
        <button
          type='button'
          className='btn btn-success btn-sm'
          onClick={() => {
            newScore++
            setScore(newScore)
          }}
        >
          +
        </button>
        <button
          type='button'
          className='btn btn-danger btn-sm'
          onClick={() => {
            newScore--
            setScore(newScore)
          }}
        >
          -
        </button>
      </span>
      <br />
      <button type='button' className='btn btn-warning' onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default Main
