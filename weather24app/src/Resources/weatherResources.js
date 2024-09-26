import { format } from "morgan";

const API_KEY ="065d9e452efca2fb3259738f18538a45"
const BASE_URL = "https://api.openweathermap.org/data/2.5/"

const getWeatherData =(infoType, searchParams)=>{
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return fetch(url).then((res)=>res.json());
};

const iconUrlFromThere = (icon)=> `"http://openweathermap.org/img/wn/${icon}@2x.png"`

const formatToLocalTime = (
    secs, 
    offset, 
    format="cccc, dd LLL yyyy' | Local time: 'hh:mm a"
)=> DateTime.fromSeconds(secs + offset, {zone: 'utc'}).toFromat(format)


const formatCurrent = (data)=>{
    const {
        coord:{lat,lan},
        main:{temp, feels_like, temp_min, temp_max, humidity, pressure}, 
        name,
        dt,
        sys:{country, sunrise, sunset},
        wind:{speed},

    } = data;

    const {main: details, icon} = weather[0]
    const formattedLocalTime = formatToLocalTime(dt, timezone);

    return{
        temp,
        feels_like,
        temp_min,
        temp_max, 
        humidity, 
        name, 
        country, 
        sunrise: formatToLocalTime(sunrise, timezone, 'hh:mm a'),
        sunset: formatToLocalTime(sunset, timezone, 'hh:mm a'),
        speed,
        details,
        icon: iconUrlFromThere(icon),
        formattedLocalTime

    };
};

const getFormattedWeatherData =async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        "weather",
        searchParams
    ).then(formatCurrent);
    
    return {  ...formattedCurrentWeather}
};
export default getFormattedWeatherData