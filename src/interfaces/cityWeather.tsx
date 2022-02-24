export interface ICityWeather {

    location: string;
    region: string;
    country: string;
    latitude: number,
    longitude: number,
    timezone: string;
    local_time: string;
    forecast: IForescasCity[]; 
}

export interface IForescasCity {
    date: string;
    max_temp_c: number;
    max_temp_f: number;
    min_temp_c: number;
    min_temp_f: number;
    avg_temp_c: number;
    avg_temp_f: number;
    will_it_rain: boolean;
    chance_of_rain: number;
    condition: string;
    icon_url: string;
    sunrise: string;
    sunset: string;
    max_wind_mph: number;
    max_wind_kph: number;

}