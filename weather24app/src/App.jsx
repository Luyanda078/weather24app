import React, { useEffect, useState } from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";
import TopButtons from './components/TopButtons';
import Inputs from './components/inputs';
import TimeandLocation from './components/TimeandLocation';
import TempAndDetails from './components/TempAndDetails';
import Estimate from './components/Estimate';
import getFormattedWeatherData from './Resources/weatherResources';

const App = () => {
  const [query, setQuery] = useState({ q: "pietermaritzburg" }); // ✅ Changed to an object
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      console.log("Fetching weather for:", query);
      const data = await getFormattedWeatherData({ ...query, units }); // ✅ Spread query
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700'>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      {weather && (
        <>
          <TimeandLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <Estimate title='3 hour step forecast' data={weather.hourly} />
          <Estimate title='Daily forecast' data={weather.daily} />
        </>
      )}
    </div>
  );
};

export default App;
