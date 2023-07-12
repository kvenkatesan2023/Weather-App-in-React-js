import React, { useState } from 'react';
import './App.css';

import axios  from 'axios';

const key = "b21134d557e1aa0c338d3d6445ed843e" ;



function App() {
  const[city,setCity] = useState('');
  const [data,setData] = useState();

  const fetchData = async() => {
    try{
    const response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    setData(response.data);
} 
catch(err){
    alert('Enter city name');
}
} 
  return (
    <div className="App">
        <h1 className='app-text'>Weather App</h1> <h2>Hai There! Enter City Name</h2>
         <div className='app-color'>
            <input className='input'
              placeholder='Enter City Name'
              value={city}
              onChange={e=>setCity(e.target.value)}/>
        


         <div>
           {data &&(
            <div>
              <h1>{data.name},{data.sys.country}</h1>
                
              <div>
                <h1>{data.weather[0].description}</h1>
                  <h2>Temperature  {data.main.temp}°C ,</h2>
              </div>
              <div>
                  <h2>Humidity  {data.main.humidity}</h2>
              </div>

            </div>
            
           )}
           
         </div>
         <button className='btn' onClick={fetchData}>Check Weather</button>
         </div>
    </div>
  );
}

export default App;
