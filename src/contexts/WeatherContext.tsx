import React, { createContext, useState, useEffect, useContext, ReactNode, Dispatch, SetStateAction } from 'react'

import api from 'services/api'

import { DateHelper, ForecastHelper } from 'helpers'

export interface CurrentWeatherProps {
    weekDay: string,
    date: string,
    location: string,
    icon: string,
    temp: string,
    description: string,
}

export interface ForecastWeatherProps {
    date: string,
    humidity: string,
    icon: string,
    pop: string,
    temp: string,
    weekDay: string,
    wind: string,
}
interface WeatherContextProps {
    isLoadingCurrent: boolean,
    setIsLoadingCurrent: Dispatch<SetStateAction<boolean>>,
    isLoadingForecast: boolean,
    setIsLoadingForecast: Dispatch<SetStateAction<boolean>>,
    currentWeather: CurrentWeatherProps,
    setCurrentWeather: Dispatch<SetStateAction<CurrentWeatherProps>>,
    getCurrentWeather: () => Promise<void>,
    forecastWeather: ForecastWeatherProps[],
    setForecastWeather: Dispatch<SetStateAction<ForecastWeatherProps[]>>,
    selectedForecast: ForecastWeatherProps,
    setSelectedForecast: Dispatch<SetStateAction<ForecastWeatherProps>>,
    updateWeather: () => void,
}
interface WeatherProviderProps {
    children: ReactNode;
}
interface CoordProps {
    latitude: number | null,
    longitude: number | null,
}

export const WeatherContext = createContext<WeatherContextProps>({} as WeatherContextProps)

export const WeatherProvider: React.FC<WeatherProviderProps>  = ({ children }) => {

    const [isLoadingCurrent, setIsLoadingCurrent] = useState(true);
    const [isLoadingForecast, setIsLoadingForecast] = useState(true);
    const [coords, setCoords] = useState({} as CoordProps);
    const [currentWeather, setCurrentWeather] = useState({} as CurrentWeatherProps)
    const [forecastWeather, setForecastWeather] = useState([] as ForecastWeatherProps[])
    const [selectedForecast, setSelectedForecast] = useState({} as ForecastWeatherProps)

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

    const getCurrentWeather = async () => {
        setIsLoadingCurrent(true);
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

    const getForecastWeather = async () => {
        setIsLoadingForecast(true);
        const { latitude, longitude } = coords
        if(latitude && longitude){
            const { data } = await api.get('/forecast', {
                params: {
                    lat: coords.latitude,
                    lon: coords.longitude,
                }
            })

            setIsLoadingForecast(false);
            const forecast = ForecastHelper.getWeek(data.list)
            const [selected] = forecast
            setForecastWeather(forecast)
            setSelectedForecast(selected)
        }
    }

    const updateWeather = () => {
        getCurrentWeather()
        getForecastWeather()
    }

    useEffect(() => {
        getCurrentWeather()
        getForecastWeather()
    // remove unnecessary warn
    // eslint-disable-next-line 
    }, [coords])
    
    const WeatherContextData = {
        isLoadingCurrent,
        setIsLoadingCurrent,
        currentWeather,
        setCurrentWeather,
        getCurrentWeather,
        isLoadingForecast,
        setIsLoadingForecast,
        forecastWeather,
        setForecastWeather,
        selectedForecast,
        setSelectedForecast,
        updateWeather,
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