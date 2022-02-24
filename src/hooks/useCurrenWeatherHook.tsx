import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '@/contexts/WeatherContext';
import { getCurrentWeather } from '@/services/getWeaterByCity';

  function useCurrentWeatherHook(){
    const { city } = useContext(WeatherContext);
    const [ currentWeather, setCurrentWeather ] = useState({});
    const [ error, setError ] = useState(false);
    const [ loader, setLoader ] = useState(true);

    useEffect(()=> {
            setLoader(true);
            if(city){
                requestData();
            }
    },[city]);

    const requestData = async () => {
      
        getCurrentWeather(city)
        .then(res => {
          setLoader(false);
          setCurrentWeather(res)
        })
        .catch(err => console.error(err))
    
    } 
    return { currentWeather, error, loader }
  }


  
export default useCurrentWeatherHook;