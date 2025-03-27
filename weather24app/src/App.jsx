import React, { useEffect, useState } from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";
import TopButtons from './components/TopButtons';
import Inputs from './components/inputs';
import TimeandLocation from './components/TimeandLocation';
import TempAndDetails from './components/TempAndDetails';
import Estimate from './components/Estimate';
import getFormattedWeatherData from './Resources/weatherResources';

const App = () => {
  const [query, setQuery] = useState({ q: "pietermaritzburg" }); 
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      console.log("Fetching weather for:", query);
      const data = await getFormattedWeatherData({ ...query, units }); 
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);
  const formatBackground = () => {
    if (!weather?.main?.temp) return 'from-cyan-600 to-blue-700'; 
    const threshold = units === 'metric' ? 20 : 60; 
    return weather.main.temp <= threshold ? 'from-cyan-600 to-blue-700' : 'from-yellow-600 to-orange-700';
  };
  
  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
  
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
