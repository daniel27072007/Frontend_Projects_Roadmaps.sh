import React, { useContext } from 'react'
import { AtualCardContext } from '../Context/AtualCard'

const ProgressBar = () => {
  const {AtualCard} = useContext(AtualCardContext);

  return (
    <div className='Info'>
        <progress className='progressBar' value={AtualCard} max={20}/>
        <p className='CounterCards'><b>{AtualCard > 20 ? AtualCard-1 : AtualCard}/20</b></p>
    </div>
  )
}

export default ProgressBar
