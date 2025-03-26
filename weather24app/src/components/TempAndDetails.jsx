import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { WiSunrise } from "react-icons/wi";
import { LuSunset } from "react-icons/lu";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import React from 'react';

const TempAndDetails = ({ weather }) => {
  const { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like } = weather;

  const verticalList = [
    { id: 1, Icon: FaThermometerEmpty, title: "Real Feel", value: `${feels_like.toFixed()}°` },
    { id: 2, Icon: BiSolidDropletHalf, title: "Humidity", value: `${humidity.toFixed()}%` },
    { id: 3, Icon: FiWind, title: "Wind", value: `${speed} km/h` },
  ];

  const HorizontalList = [
    { id: 1, Icon: WiSunrise, title: "Sunrise", value: sunrise },
    { id: 2, Icon: LuSunset, title: "Sunset", value: sunset },
    { id: 3, Icon: MdKeyboardArrowUp, title: "High", value: `${temp_max.toFixed()}°` },
    { id: 4, Icon: MdKeyboardArrowDown, title: "Low", value: `${temp_min.toFixed()}°` },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p> {/* ✅ Dynamic weather condition (e.g., "Cloudy") */}
      </div>

      <div className="flex flex-row items-center justify-between py-3">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`} // ✅ Dynamic icon
          alt="weather icon"
          className="w-20"
        />
        <p className="text-5xl">{temp.toFixed()}°</p> {/* ✅ Dynamic temperature */}
        
        <div className="flex flex-col space-y-3 items-start">
          {verticalList.map(({ id, Icon, title, value }) => (
            <div key={id} className="flex font-light text-sm items-center justify-center">
              <Icon size={18} className="mr-1" />
              {`${title}:`} <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
        {HorizontalList.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex flex-row items-center">
            <Icon size={30} />
            <p className="font-light ml-1">
              {`${title}:`} <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
