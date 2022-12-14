import React, { Fragment } from 'react';
import { useWeatherContext } from 'contexts/WeatherContext'
import { MapPin } from 'react-feather'

import { Loading, IconWeather } from 'components'

import { Container, DateLocation, WeatherInfo } from './styles';

const CurrentWeatherCard: React.FC = () => {

  const { currentWeather, isLoadingCurrent } = useWeatherContext()
  
  return (
    <Container>
        {isLoadingCurrent ? (
          <Loading />
        ) : (
          <Fragment>
            <DateLocation>
              <section>
                <h2>{currentWeather.weekDay}</h2>
                <span>{currentWeather.date}</span>
              </section>
              <p>
                <MapPin size={18} /> <span>{currentWeather.location}</span>
              </p>
            </DateLocation>

            <WeatherInfo>
              <IconWeather name={currentWeather.icon} size={60} />
              <section>
                <h1>{currentWeather.temp}</h1>
                <span>{currentWeather.description}</span>
              </section>
            </WeatherInfo> 
          </Fragment>
        )}
    </Container>
  )
}

export default CurrentWeatherCard;