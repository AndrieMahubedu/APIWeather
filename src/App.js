import React, { useState } from 'react';
import axios from 'axios';
//import './App.css';

function App() {
  //set Temp
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [Temp, setTemp] = useState('');

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6b9b3c97adf626af64199a901181b599&units=metric`

  const searchLocation = async () => {
    console.log(location)
    await axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
      setTemp(data.weather[0].description)
    })
  }
//get day
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];

  

  

  return (
    <div className="app">
      <div className='search'>
        <input
          onChange={e => setLocation(e.target.value)}
          placeholder='Enter Location'
          type="text" />

        <button onClick={searchLocation}>Search</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h1>{data.name}</h1>
          </div>
          <div className="temp">
            {data.main ? <p>{data.main.temp}°C</p> : null}
            <p >
              {day}
            </p>
            
          </div>
          <div className="description">
            <p className='bold'>{Temp}</p>
          </div>
          
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>Feels Like</p>
            
            {data.main ? <p>{data.main.feels_like}°C</p> : null}
          </div>
          <div className='himidity'>
            {data.main ? <p>{data.main.humidity}°C</p> : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
            {data.main ? <p>{data.main.temp_min}°C</p> : null}
            <p>Temp Min</p>

          </div>
          <div className='wind'>
            {data.main ? <p>{data.main.temp_max}°C</p> : null}
            <p>Temp Max</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
