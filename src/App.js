import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherBtn from './component/WeatherBtn';
import ClipLoader from "react-spinners/ClipLoader";


// 1. 앱이 실행되자마자 현재 위치기반 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨 날씨상태 
// 3. 버튼 5개 (1개는 현재위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [iconId, setIconId] = useState('');
  const cities = ["seoul", "Ho Chi Minh", "paris", "tokyo"];

  //현재위치 날씨정보
  const getCurrentLocation = () => {
    console.log("11");
    navigator.geolocation.getCurrentPosition((position)=> {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);

    });
  };

  // 현재위치 날씨 정보
  const getWeatherByCurrentLocation = async (lat, lon) => {
    console.log("22");
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0e3eddf3ffdc21e4c0addc01af2f0f3b&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setIconId(data.weather[0].icon);
    setWeather(data);
    setLoading(false);
  };

  // 도시별 날씨 정보
  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e3eddf3ffdc21e4c0addc01af2f0f3b&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setIconId(data.weather[0].icon);
      console.log(iconId);
      
    } catch(err) {
      console.log("err", err.message);
      setLoading(true);
    }
    setLoading(false);   
    
  };

  // 현재위치 날씨 이벤트
  const handleCityChange = (city) => {
    if(city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  }

  useEffect(() => {
    if( city === "" || city === null) {
      //날씨정보 가져오기
      getCurrentLocation();
    } else {
      getWeatherByCity();
    } } ,[city]);

  return <div>
    {loading ? (
      <div className='container'>
        <ClipLoader color="#f88c6b" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" />
      </div>
    ) : ( 
      <div className='container'>
        <ClipLoader color="#f88c6b" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" />
        <WeatherBox weather={weather} id={iconId}/>
        <WeatherBtn cities={cities} setCity={setCity} handleCityChange={handleCityChange}/>
      </div>
    )}   
  </div>
}

export default App;
