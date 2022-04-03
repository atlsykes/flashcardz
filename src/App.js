import React from 'react'
import Welcome from './containers/Welcome/Welcome'
import Main from './containers/Main/Main'
import Footer from './components/Footer/Footer'
import './App.css'

function App () {
  return (
    <>
      <div className='App'>
        <Welcome />
        <br />
        <br />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
