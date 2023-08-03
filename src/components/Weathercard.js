import React from 'react'
import  '../styles/Weathercard.css'


function Weathercard() {
  return (
    <div className='weather-card'>
      <div className='search-div'>
      <input type="text" placeholder='Search Weather by city' />
      <button>Search</button>
      </div>
    </div>
  )
}

export default Weathercard