import React, { useEffect, useState, Fragment } from 'react';
import { useWeatherContext, CurrentWeatherProps } from 'contexts/WeatherContext'
import { MapPin, Sun } from 'react-feather'

import Loading from 'components/Loading'

import { Container, DateLocation, WeatherInfo } from './styles';

const CurrentWeatherCard: React.FC = () => {

  const { getCurrentWeather, isLoadingCurrent } = useWeatherContext()
  const [weather, setWeather] = useState({} as CurrentWeatherProps)

  useEffect(() => {
    getCurrentWeather()
    .then((data) => {
      if(data){
        setWeather(data)
      }
    })
  }, [getCurrentWeather])

  return (
    <Container>
        {isLoadingCurrent ? (
          <Loading />
        ) : (
          <Fragment>
            <DateLocation>
              <section>
                <h2>{weather.weekDay}</h2>
                <span>{weather.date}</span>
              </section>
              <p>
                <MapPin size={18} /> <span>{weather.location}</span>
              </p>
            </DateLocation>

            <WeatherInfo>
              <Sun size={60} />
              <section>
                <h1>{weather.temp}</h1>
                <span>{weather.description}</span>
              </section>
            </WeatherInfo> 
          </Fragment>
        )}
    </Container>
  )
}

export default CurrentWeatherCard;