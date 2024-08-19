import React from 'react'

const WeatherBox = ({weather, id}) => {
  console.log("weather",weather);
  return (
    <div className="weather-box">
      <div>{weather?.name}</div> 
      <h1>{weather && weather.main ? Math.round(weather.main.temp) : ""}°</h1>
      <h4>{weather && weather.main ? ((weather?.main.temp * 9) / 5 + 32).toFixed(1) : ""}℉</h4>
      <h4>{weather && weather.weather[0]?.description}</h4>
      <img className="img-fluid" src={`http://openweathermap.org/img/wn/${id}@2x.png`} alt="data-img" onError={(e) => (e.target.style.display = "none")}/>
    </div>
  )
}

export default WeatherBox
