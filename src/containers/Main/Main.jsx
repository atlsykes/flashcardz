import content from '../../content'
import React, { useState } from 'react'
import './Main.css'
import CardList from '../../components/CardList/CardList'
import backgroundVideo from './animatedCloudsVideo.mp4'

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
// const audioStart = new Audio(
//   'https://www.freesoundslibrary.com/wp-content/uploads/2020/03/dark-transition-sound-effect.mp3'
// )

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
    console.log(`newCount = ${newCount}`)
  }

  return (
    <div className='main'>
{/* background video */}
      <video loop autoPlay muted id='video'>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
{/* 100% score modal */}
{score >= 5
  ? (console.log('you have reached 5!'))
  : (console.log('not yet'))}
{/* <div className="modal" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Congrats, you have scored 100%!</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
  </div>
    )
  : (
    <div /> */}
{/* Start Main Div */}
      <div className='col-12' style={{ textAlign: 'left', marginLeft: '2%' }}>
        {firstCard === true
          ? (
            <div
              className='alert alert-warning'
              role='alert'
              style={{ textAlign: 'center' }}
            >
              You have reached the beginning!
              <button
                type='button'
                className='btn btn-warning'
                style={{ marginLeft: '20px' }}
                onClick={() => {
                  setFirstCard(false)
                }}
              >
                X
              </button>
            </div>
            )
          : (
            <div />
            )}
        {lastCard === true
          ? (
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
            )
          : (
            <div />
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
          {reveal === true
            ? (
              <h6 className='card-text' style={{ textAlign: 'left' }}>
                {' '}
                {content[count].answer}
              </h6>
              )
            : (
              <p />
              )}
          {/* render a card list if content type = 'list' */}
          {(reveal === true) & (content[count].type === 'list')
            ? (
              <CardList id={content[count].id} cardObj={content[count]} />
              )
            : (
              <p />
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
              style={{ marginLeft: '12%' }}
              type='submit'
              onSubmit={handleSubmit}
            >
              Jump to card
            </button>
            <input
              style={{ maxWidth: '60px' }}
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
            style={{ marginRight: '20%', marginBottom: '10px' }}
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
            style={{ marginBottom: '10px' }}
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
          <button
            style={{ marginLeft: '20%' }}
            type='button'
            className='btn btn-warning'
            onClick={reset}
          >
            Reset
          </button>
        </span>
      </div>
    </div>
  )
}

export default Main
