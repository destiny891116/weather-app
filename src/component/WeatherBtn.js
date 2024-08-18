import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const WeatherBtn = ({cities, setCity, handleCityChange}) => {
  return (
    <div>
       <img className='imgBtn' src={'/img/free-icon-target-2541673.png'} alt='btn' variant={`${setCity === null ? "outline-warning" : "secondary"}`} onClick={() => handleCityChange("current")} />

        {cities.map((item, index)=> (
          <Button className="weatherBtn" variant={`${setCity === item ? "outline-warning" : "secondary"}`} onClick={() => handleCityChange(item)} >{item}</Button>
        ))}
    </div>
  )
}

export default WeatherBtn
