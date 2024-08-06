import SearchBox from './SearchBox'
import Infobox from './InfoBox';
import { useState } from 'react';
import CloudIcon from '@mui/icons-material/Cloud';


export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        country:"IN",
        name:"Jaipur",
        feelslike:32.42,
        temp:25.05,
        tempMax:27.62,
        tempMin:24.02,
        humidity:89,
        icon:"50d",
        weather:"mist",
        wind:5.66
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather {<CloudIcon/>} </h1>
             <SearchBox updateInfo={updateInfo} />
              <Infobox  info={weatherInfo}/>
            
        </div>
    )
}