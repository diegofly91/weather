
import useCurrentWeatherHook from '@/hooks/useCurrenWeatherHook';
import ContainerBlock from '../Container/ContainerBlock';
import AirIcon from '@mui/icons-material/Air';
import useStyles from './currentWether.styles';

const CurrenWeater = () => {

    const { currentWeather, error, loader } = useCurrentWeatherHook();
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
                   <img
                        src={`https:${currentWeather?.icon_url}`} 
                        alt="Picture of the author"
                  />
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