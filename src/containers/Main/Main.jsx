import content from '../../content'
import React, { useState } from 'react'
import './Main.css'
import CardList from '../../components/CardList/CardList'
let newCount = 0
let newScore = 0
const audioPlus = new Audio(
  'https://www.freesoundslibrary.com/wp-content/uploads/2021/07/bicycle-bell-ding-sound-effect.mp3'
)
const audioMinus = new Audio(
  'https://www.freesoundslibrary.com/wp-content/uploads/2018/04/game-fail-sound-effect.mp3'
)
const audioReset = new Audio(
  'https://www.freesoundslibrary.com/wp-content/uploads/2018/01/ding-sound-effect.mp3'
)
const audioStart = new Audio(
  'https://www.freesoundslibrary.com/wp-content/uploads/2020/03/dark-transition-sound-effect.mp3'
)

const Main = () => {
  const [count, setCount] = useState(0)
  const [reveal, setReveal] = useState(false)
  const [score, setScore] = useState(0)
  const [firstCard, setFirstCard] = useState(false)
  const [lastCard, setLastCard] = useState(false)
  const [cardNumber, setCardNumber] = useState(1)

  const increment = () => {
    setReveal(false)
    setFirstCard(false)
    newCount++
    if (newCount === content.length) {
      newCount--
      setLastCard(true)
      return
    }
    setCount(newCount)
  }

  const decrement = () => {
    setReveal(false)
    setLastCard(false)
    newCount--
    if (newCount === -1) {
      newCount++
      setFirstCard(true)
      return
    }
    setCount(newCount)
  }

  const reset = () => {
    audioReset.play()
    setFirstCard(false)
    setLastCard(false)
    newScore = 0
    setReveal(false)
    newCount = 0
    setCount(newCount)
    setCardNumber(1)
  }

  const showAnswer = () => {
    setReveal(true)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setReveal(false)
    setCount(parseInt(cardNumber) - 1)
    newCount = parseInt(cardNumber) - 1
  }

  return (
    <div className='main'>
      <div className='col-12' style={{ textAlign: 'left', marginLeft: '2%' }}>
        {firstCard === true ? (
          <div
            class='alert alert-warning'
            role='alert'
            style={{ textAlign: 'center' }}
          >
            You have reached the beginning!
            <button
              type='button'
              class='btn btn-warning'
              style={{ marginLeft: '20px' }}
              onClick={() => {
                setFirstCard(false)
              }}
            >
              X
            </button>
          </div>
        ) : (
          <div></div>
        )}
        {lastCard === true ? (
          <div
            className='alert alert-warning'
            role='alert'
            style={{ textAlign: 'center' }}
          >
            You have reached the end!
            <button
              type='button'
              className='btn btn-warning'
              style={{ marginLeft: '20px' }}
              onClick={() => {
                setLastCard(false)
              }}
            >
              X
            </button>
          </div>
        ) : (
          <div></div>
        )}
        <h5>Score: {newScore}</h5>
        <i>cards: {content.length}</i>
        <br />
      </div>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title' style={{ textAlign: 'left' }}>
            Card# {content[count].id}
          </h5>
          <br />
          <h6
            className='card-subtitle mb-2 text-muted'
            style={{ textAlign: 'left' }}
          >
            {content[count].question}
          </h6>
          <br />
          <button onClick={showAnswer}>show</button>
          <br />
          <br />
          {/* render a basic answer if no content type is present */}
          {reveal === true ? (
            <h6 className='card-text' style={{ textAlign: 'left' }}>
              {' '}
              {content[count].answer}
            </h6>
          ) : (
            <p></p>
          )}
          {/* render a card list if content type = 'list' */}
          {(reveal === true) & (content[count].type === 'list') ? (
            <CardList id={content[count].id} cardObj={content[count]} />
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
          className='btn btn-primary'
          onClick={increment}
        >
          Next
        </button>
        <form
          onSubmit={e => {
            handleSubmit(e, { cardNumber })
          }}
        >
          <div className='input-group mb-3 input-group-sm'>
            <button
              className='btn btn-primary'
              style={{ marginTop: '10%', marginLeft: '12%' }}
              type='submit'
              onSubmit={handleSubmit}
            >
              Jump to card
            </button>
            <input
              style={{ marginTop: '10%', maxWidth: '60px' }}
              type='number'
              min='1'
              max={content.length}
              className='form-control'
              placeholder='##'
              value={cardNumber}
              onChange={e => {
                setCardNumber(e.target.value)
              }}
            />
          </div>
        </form>
        <span>
          <button
            style={{ marginRight: '20%' }}
            type='button'
            className='btn btn-success'
            onClick={() => {
              audioPlus.play()
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
                newScore = 0
                return
              }
              audioMinus.play()
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
