import React from 'react'
import  '../styles/Weathercard.css'
import Clear from '../images/clear.png'


function Weathercard() {
  return (
    <div className='weather-card'>
      <div className='search-div'>
      <input type="text" placeholder='Search Weather by city' />
      <button>Search</button>
      </div>

      <div className='temperature'>
        <p> <img src={Clear} alt="" /> </p>
        <p></p>
      </div>
    </div>
  )
}

export default Weathercard