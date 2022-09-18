import React, { createContext, useState, useEffect, useContext, ReactNode, Dispatch, SetStateAction } from 'react'

import api from 'services/api'

import { DateHelper } from 'helpers'

export interface CurrentWeatherProps {
    weekDay: string,
    date: string,
    location: string,
    icon: string,
    temp: string,
    description: string,
}
interface WeatherContextProps {
    isLoadingCurrent: boolean,
    setIsLoadingCurrent: Dispatch<SetStateAction<boolean>>,
    currentWeather: CurrentWeatherProps,
    setCurrentWeather: Dispatch<SetStateAction<CurrentWeatherProps>>,
}
interface WeatherProviderProps {
    children: ReactNode;
}
interface CoordProps {
    latitude: number | null,
    longitude: number | null,
}

const WeatherContext = createContext<WeatherContextProps>({} as WeatherContextProps)

export const WeatherProvider: React.FC<WeatherProviderProps>  = ({ children }) => {

    const [isLoadingCurrent, setIsLoadingCurrent] = useState(true);
    const [coords, setCoords] = useState({} as CoordProps);
    const [currentWeather, setCurrentWeather] = useState({} as CurrentWeatherProps)

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

    useEffect(() => {
        const getCurrentWeather = async () => {
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
                setCurrentWeather({
                    weekDay: DateHelper.getWeekDay(),
                    date: DateHelper.getFullDate(),
                    location: `${data.name}, ${data.sys.country}`,
                    icon: weather.icon,
                    temp: `${Math.round(main.temp)}°C`,
                    description: weather.description,
                })
            }
        }

        getCurrentWeather()
    }, [coords])
    
    const WeatherContextData = {
        isLoadingCurrent,
        setIsLoadingCurrent,
        currentWeather,
        setCurrentWeather,
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