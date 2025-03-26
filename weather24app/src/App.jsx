import React, { useEffect, useState } from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";
import TopButtons from './components/TopButtons';
import Inputs from './components/inputs';
import TimeandLocation from './components/TimeandLocation';
import TempAndDetails from './components/TempAndDetails';
import Estimate from './components/Estimate';
import getFormattedWeatherData from './Resources/weatherResources';

const App = () => {
  const [query, setQuery] = useState('pietermaritzburg'); // ✅ Changed to string
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const data = await getFormattedWeatherData({ q: query, units });
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700'>
      <TopButtons />
      <Inputs setQuery={setQuery} setUnits={setUnits} /> {/* ✅ Pass props */}
      {weather && (
        <>
          <TimeandLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <Estimate />
          <Estimate />
        </>
      )}
    </div>
  );
};

export default App;
