
import useCurrentWeatherHook from '@/hooks/useCurrenWeatherHook';
import ContainerBlock from '../Container/ContainerBlock';
import { Avatar } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import useStyles from './currentWether.styles';
import { NowResponse } from "m3o/weather";
import Image from 'next/image';

const CurrenWeater = () => {

    const currentWeather: NowResponse = useCurrentWeatherHook().currentWeather;
    const classes = useStyles();
    return <ContainerBlock className={classes.root}>
               <div className={classes.title}>
                   {currentWeather.location} - {currentWeather.country}
               </div>
               <div className={classes.left}>
                  <span className={classes.large}>
                    Wind
                  </span>
                  <AirIcon 
                    fontSize='large'
                    htmlColor='#FFFFFF'
                  />
                  <span >
                  {currentWeather.wind_direction} { currentWeather.wind_mph}  mph
                  </span>
               </div>
               <div className={classes.right}>  
                  <span className={classes.large}>
                      Cloud Cover {currentWeather.cloud}%
                   </span>
                   {currentWeather.icon_url  && <Avatar 
                      src={currentWeather.icon_url}
                      sx={{ width: 64, height: 64 }}
                    />}
                   <span className={classes.large}>
                     {currentWeather.temp_c}° 
                   </span>
                   <span className={classes.medium}>
                      Humidity {currentWeather.humidity}%
                   </span>
                   <span className={classes.medium}>
                     {currentWeather.condition}
                   </span>
              </div>
           </ContainerBlock>
}

export default CurrenWeater;