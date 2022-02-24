import { createContext, useState } from "react";
import { ICity } from '@/interfaces/index';
type Props = {
    children: any
}

export const WeatherContext = createContext<ICity | null>(null);

export const WeatherProvider = ({ children }: Props) => {
    
    const [ city, setCity ] = useState('Buenos Aires');
    const [ date, setDate ] = useState();


    return (
        <WeatherContext.Provider
            value={{ city, setCity }}
        >
            {children}
        </WeatherContext.Provider>
    );
}
