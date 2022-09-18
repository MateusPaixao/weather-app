import React, { createContext, useState, useEffect, useContext, ReactNode, Dispatch, SetStateAction, useCallback } from 'react'

import api from 'services/api'

import { DateHelper } from 'helpers'

interface WeatherContextProps {
    isLoadingCurrent: boolean,
    setIsLoadingCurrent: Dispatch<SetStateAction<boolean>>,
    getCurrentWeather: () => Promise<CurrentWeatherProps | undefined>,
}

interface WeatherProviderProps {
    children: ReactNode;
}

interface CoordProps {
    latitude: number | null,
    longitude: number | null,
}

export interface CurrentWeatherProps {
    weekDay: string,
    date: string,
    location: string,
    icon: string,
    temp: string,
    description: string,
}

const WeatherContext = createContext<WeatherContextProps>({} as WeatherContextProps)

export const WeatherProvider: React.FC<WeatherProviderProps>  = ({ children }) => {

    const [isLoadingCurrent, setIsLoadingCurrent] = useState(true);
    const [coords, setCoords] = useState({} as CoordProps);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            setCoords({ latitude, longitude })
          },
          (error) => {
            setCoords({ latitude: null, longitude: null })
            console.log(error)
          }
        );
    }, [])

    const getCurrentWeather = useCallback(async () => {
        const { latitude, longitude } = coords
        if(latitude && longitude){
            const { data } = await api.get('/weather', {
                params: {
                    lat: coords.latitude,
                    lon: coords.longitude,
                }
            })

            const [weather] = data.weather
            const { main } = data

            setIsLoadingCurrent(false);
            return {
                weekDay: DateHelper.getWeekDay(),
                date: DateHelper.getFullDate(),
                location: `${data.name}, ${data.sys.country}`,
                icon: weather.icon,
                temp: `${Math.round(main.temp)}°C`,
                description: weather.description,
            }
        }
    }, [coords])
    
    const WeatherContextData = {
        isLoadingCurrent,
        setIsLoadingCurrent,
        getCurrentWeather,
    }

    return (
        <WeatherContext.Provider value={WeatherContextData}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeatherContext = () => {
    const context = useContext(WeatherContext);
  
    if (Object.keys(context).length === 0) {
        throw new Error('The hook useWeatherContext should be used inside of WeatherContext');
    }

    return context;
}