import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Indobox({info}){
    let imgsrc = "https://plus.unsplash.com/premium_photo-1664004040258-0516bfeb8fa9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://media.istockphoto.com/id/1820924541/photo/white-snowy-wonderland-in-nordic-forest-arctic-frosty-wether-winter-woodland.jpg?s=2048x2048&w=is&k=20&c=J7tN8aaJHFRgn2eA39aRJybZ22JvPtNhs2bcHgB2Y1o=";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="Infobox">
          

        <div className='Card-container'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 18 ? HOT_URL : COLD_URL}
        title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {info.name} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 18 ? <WbSunnyIcon/> : <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Tempreture = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}%</p>
          
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          
          <p>Wind Speed = {info.wind} km/h</p>
         <p>The Weather can be described as <i>{info.weather}</i> and feels Like {info.feelslike}&deg;C</p>
          

        </Typography>
      </CardContent>
     
    </Card>
    </div>   
    </div>
    )
}