import React from 'react'
import  '../styles/Weathercard.css'
import Clear from '../images/clear.png'
import Humidity from '../images/humidity.png'
import Wind from '../images/wind.png'
import Clouds from '../images/clouds.png'
import Drizzle from '../images/drizzle.png'
import Mist from '../images/mist.png'
import Rain from '../images/rain.png'
import Snow from '../images/snow.png'

function Weathercard() {
  const apiKey = '055b7d5f2715779c9dcb2b24327a0408';
  const apiUrl = 'https://api.openweathermap.org';
  
  return (
    <div className='weather-card'>
      <div className='search-div'>
      <input type="text" placeholder='Search Weather by city' />
      <button>Search</button>
      </div>
      <div className='city'><p>Nairobi</p></div>
      <div className='temperature'>
        <p className='status-image'> <img src={Clear} alt="" /> </p>
        <h1>20&nbsp;<sup>oC</sup></h1>

        <div className='humidity-wind'>
          <p><img src={Humidity} alt="" />Humidity- 30%</p>
          <p><img src={Wind} alt="" />Wind-5 km/h</p>
        </div>
        <p className='author'>Made on earth by humans</p>
      </div>

    </div>
  
  )
  }  


export default Weathercard