import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '@/contexts/WeatherContext';
import { requestForescast } from '@/services/getWeaterByCity';

// Get the weather forecast for the next 1-10 days
  function useForestcastHook(){
    const { city, days } = useContext(WeatherContext);
    const [ cityWeather, setCityWeather ] = useState(null);
    const [ error, setError ] = useState(false);
    const [ loader, setLoader ] = useState(true);

    useEffect(()=> {
            setLoader(true);
            if(city){
                requestData();
            }
    },[city, days]);

    const requestData = async () => {
      
        requestForescast(city, days)
        .then(res => {
          setLoader(false);
          setCityWeather(res)
        })
        .catch(err => console.error(err))
    
    } 
    return { cityWeather, error, loader }
  }


  
export default useForestcastHook;