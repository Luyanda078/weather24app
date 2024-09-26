import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { WiSunrise } from "react-icons/wi";
import { LuSunset } from "react-icons/lu";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import React from 'react'

const TempAndDetails = () => {
    const verticalList =[
        {
            id:1,
            Icon:FaThermometerEmpty,
            title:"Real Feel",
            value:"22°"
        },
        {
            id:2,
            Icon: BiSolidDropletHalf,
            title:"Humidity",
            value:"360%°"
        },
        {
            id:3,
            Icon:FiWind ,
            title:"Wind",
            value:"27 km/h"
        }
    ];
    const HorizontalList =[
        {
            id:1,
            Icon:WiSunrise,
            title:"Suneise",
            value:"05:34 AM°"
        },
        {
            id:2,
            Icon: LuSunset,
            title:"High",
            value:"08:00PM"
        },
        {
            id:3,
            Icon:MdKeyboardArrowUp,
            title:"High",
            value:"36°"
        },
        {
            id:4,
            Icon:MdKeyboardArrowDown,
            title:"Low",
            value:"6°"
        }
    ];
  return (
    
    <div>
        <div className="flex items-center justify-center py-6 text-xl textcy-300">
        <p>Rain</p>
        </div>

        <div className="flex flex-row items-center justify-between py-3">
            <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
            className="w-20"
            />
            <p className="text-5xl">34°</p>
            <div className="flex flex-col space-y-3 items-start">
                {
                    verticalList.map(({id, Icon,title,value})=>(
                        <div key={id} className="flex font-light text-sm items-center justify-center">
                            <Icon size={18} className="mr-1"/>
                            {`${title}:`}<span className="font-medium ml-1">{value}</span>
                        </div>
                    ))
                }
               
            </div>
        </div>



        <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3 ">
            {
                HorizontalList.map(({id,Icon,title,value})=>(
                    <div key={id} className="flex flex-row items-center">
                    <Icon size={30}/>
                    <p className="font-light ml-1"> {`${title}:`}
                        <span className="font-medium ml-1">{value}</span></p>
    
                </div>    
                ))
            }

           

        </div>
    </div>
  )
}

export default TempAndDetails
 