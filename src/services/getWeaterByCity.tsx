import { WeatherService, ForecastResponse, NowResponse } from "m3o/weather";
const { API_KEY } = process.env
const weatherService = new WeatherService(API_KEY);

export const requestForescast = async (city: string, days: number) => {
    const resp: ForecastResponse = await  weatherService.forecast({
      days,
      location: city,
    });
    return resp;
} 


export const getCurrentWeather = async (city: string) => {
  const rsp: NowResponse = await weatherService.now({
    location: city,
  });
  return rsp;
}