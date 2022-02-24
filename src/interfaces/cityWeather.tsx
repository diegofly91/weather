export interface ICityWeather {

    location: String;
    region: String;
    country: String;
    latitude: number,
    longitude: number,
    timezone: String;
    local_time: String;
    forecast: IForescasCity[]; 
}

export interface IForescasCity {
    date: String;
    max_temp_c: number;
    max_temp_f: number;
    min_temp_c: number;
    min_temp_f: number;
    avg_temp_c: number;
    avg_temp_f: number;
    will_it_rain: boolean;
    chance_of_rain: number;
    condition: String;
    icon_url: String;
    sunrise: String;
    sunset: String;
    max_wind_mph: number;
    max_wind_kph: number;

}