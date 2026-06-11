// import { useState } from 'react'
import './App.css'
import ProgressBar from './Components/ProgressBar'
import Card from './Components/Card'
import ButtonMenu from './Components/ButtonMenu'

function App() {
  return (
    <div className='settings'>
      <h2><b>Flash Cards</b></h2>
      <div className='component'>
        <ProgressBar/>
      </div>
      <div className='component cards'>
        <Card/>
        <ButtonMenu/>
      </div>
    </div>
  )
}

export default App
