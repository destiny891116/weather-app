import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const WeatherBtn = ({cities, setCity, handleCityChange}) => {
  return (
    <div>
       <Button className="weatherBtn" variant={`${setCity === null ? "outline-warning" : "warning"}`} onClick={() => handleCityChange("current")}>Current Location</Button>

        {cities.map((item, index)=> (
          <Button className="weatherBtn" variant={`${setCity === item ? "outline-warning" : "warning"}`} onClick={() => handleCityChange(item)} >{item}</Button>
        ))};
    </div>
  )
}

export default WeatherBtn
