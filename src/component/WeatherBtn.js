import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherBtn = ({cities}) => {
  return (
    <div>
        <Button variant="warning">Current Location</Button>

        {cities.map((item)=> (
            <Button variant="warning">{item}</Button>
        ))};
    </div>
  )
}

export default WeatherBtn
