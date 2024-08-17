import React from 'react'

const WeatherBox = ({weather, id}) => {
  return (
    <div className="weather-box">
      <div>{weather?.name}</div> 
      <h2>{weather && weather.main ? Math.round(weather.main.temp) : ""}℃  /  {weather && weather.main ? ((weather?.main.temp * 9) / 5 + 32).toFixed(2) : ""}℉</h2>
      <h3>{weather && weather.weather[0]?.description}</h3>
      <img className="img-fluid" src={`http://openweathermap.org/img/wn/${id}@2x.png`} />
    </div>
  )
}

export default WeatherBox
