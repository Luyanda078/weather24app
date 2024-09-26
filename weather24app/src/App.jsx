import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import TopButtons from './components/TopButtons';
import Inputs from './components/inputs';
import TimeandLocation from './components/TimeandLocation';
import TempAndDetails from './components/TempAndDetails';
import Estimate from './components/Estimate';
import getFormattedWeatherData from './Resources/weatherResources';

function App() {
  const getWeather =async ()=>{
    const data = await getFormattedWeatherData({q: "berlin"});
    console.log(data);
  };
  getWeather();


  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700'>
     <TopButtons/>
     <Inputs/>
     <TimeandLocation/>
     <TempAndDetails/>
     <Estimate/>
     <Estimate/>
    </div>
  )
}

export default App
