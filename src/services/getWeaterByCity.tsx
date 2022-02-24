import { WeatherService, ForecastResponse } from "m3o/weather";

const weatherService = new WeatherService('ZjhkMmJhMTktNDdkZC00NjE2LTgyYWQtOTcwYTUyYTFkYWZh');

export const requestForescast = async (city: string) => {
      
    const resp: ForecastResponse = await  weatherService.forecast({
      days: 5,
      location: city,
    });

    return resp;
} 
