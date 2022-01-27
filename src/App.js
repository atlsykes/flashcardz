import React from 'react'
import Welcome from './containers/Welcome/Welcome'
import Main from './containers/Main/Main'
import './App.css'

function App () {
  return (
    <>
      <div className='App'>
        <Welcome />
        <br />
        <br />
        <Main />
        <br />
        <button type='button' class='btn btn-info'>
          Next
        </button>
      </div>
    </>
  )
}

export default App
