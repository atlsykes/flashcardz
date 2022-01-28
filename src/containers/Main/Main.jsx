import content from './content'
import React, { useState } from 'react'
import './Main.css'
let newCount = 0
let newScore = 0

const Main = () => {
  const [count, setCount] = useState(0)
  const [reveal, setReveal] = useState(false)
  const [score, setScore] = useState(0)
  const [firstCard, setFirstCard] = useState(false)
  const [lastCard, setLastCard] = useState(false)

  const increment = () => {
    setReveal(false)
    setFirstCard(false)
    console.log(`content length = ${content.length}`)
    newCount++
    if (newCount === content.length) {
      newCount--
      setLastCard(true)
      return
    }
    setCount(newCount)
    console.log(`newCount = ${newCount}`)
  }

  const decrement = () => {
    setReveal(false)
    setLastCard(false)
    console.log(`content length = ${content.length}`)
    newCount--
    if (newCount === -1) {
      newCount++
      setFirstCard(true)
      // alert('You have reached the beginning!')
      return
    }
    setCount(newCount)
    console.log(`newCount = ${newCount}`)
  }

  const reset = () => {
    setFirstCard(false)
    setLastCard(false)
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
      <div className='col-12' style={{ textAlign: 'left', marginLeft: '2%' }}>
        {firstCard === true ? (
          <div class='alert alert-warning' role='alert'>
            You have reached the beginning!
          </div>
        ) : (
          <div></div>
        )}
        {lastCard === true ? (
          <div class='alert alert-warning' role='alert'>
            You have reached the end!
          </div>
        ) : (
          <div></div>
        )}
        <h5>
          <bold>Score: {newScore}</bold>
        </h5>
        <br />
      </div>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title' style={{ textAlign: 'left' }}>
            Card# {content[count].id}
          </h5>
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
      <div className='button-div col-2'>
        <button
          style={{ marginBottom: '10%', marginRight: '30%' }}
          type='button'
          className='btn btn-info'
          onClick={decrement}
        >
          Prev
        </button>

        <button
          style={{ marginBottom: '10%' }}
          type='button'
          className='btn btn-info'
          onClick={increment}
        >
          Next
        </button>
        <br />
        <span>
          <button
            style={{ marginRight: '20%' }}
            type='button'
            className='btn btn-success'
            onClick={() => {
              newScore++
              setScore(newScore)
            }}
          >
            +
          </button>
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => {
              newScore--
              if (newScore === -1) {
                alert("Can't have a score of less than 0!")
                return
              }
              setScore(newScore)
            }}
          >
            -
          </button>
        </span>
        <br />
        <button
          style={{ marginTop: '10%' }}
          type='button'
          className='btn btn-warning'
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Main
