import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherBtn from './component/WeatherBtn';


// 1. 앱이 실행되자마자 현재 위치기반 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨 날씨상태 
// 3. 버튼 5개 (1개는 현재위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다
function App() {

  const [weather, setWeather] = useState(null);
  const cities = ["seoul", "Hội An", "paris", "tokyo"];

  //날씨정보
  const getCurrentLocation = () => {

    navigator.geolocation.getCurrentPosition((position)=> {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);

    });
  };

  // 현재위치 가져오기
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0e3eddf3ffdc21e4c0addc01af2f0f3b&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    //날씨정보 가져오기
    getCurrentLocation();
  } ,[]);

  return <div>
    <div className='container'>
      <WeatherBox weather={weather}/>
      <WeatherBtn cities={cities}/>
    </div>
   
  </div>
}

export default App;
