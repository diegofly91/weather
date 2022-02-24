import { createContext, useState } from "react";
import { ICity } from '@/interfaces/index';
type Props = {
    children: any
}

export const WeatherContext = createContext<any | null>(null);

export const WeatherProvider = ({ children }: Props) => {
    
    const [ city, setCity ] = useState('Buenos Aires');
    const [ days, setDays ] = useState(3);


    return (
        <WeatherContext.Provider
            value={{ city, setCity, days, setDays }}
        >
            {children}
        </WeatherContext.Provider>
    );
}
