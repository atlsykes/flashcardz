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
      </div>
    </>
  )
}

export default App
