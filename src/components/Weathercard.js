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
        <p className='status-image'> <img src={Clear} alt="" /> </p>
        <h1>20 <sup>oC</sup></h1>
      </div>
    </div>
  )
}

export default Weathercard