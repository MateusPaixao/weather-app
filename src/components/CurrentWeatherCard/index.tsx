import React from 'react';

import { MapPin, Sun } from 'react-feather'

import { Container, DateLocation, WeatherInfo } from './styles';

const CurrentWeatherCard: React.FC = () => {
  return (
    <Container>
        <DateLocation>
          <p>
            <strong>Saturday</strong>
            <span>15 Jan 2019</span>
          </p>
          <p>
            <MapPin size={18} /> <span>Paris, FR</span>
          </p>
        </DateLocation>

        <WeatherInfo>
          <Sun size={60} />
          <p>
            <h1>29°C</h1>
            <span>Sunny</span>
          </p>
        </WeatherInfo> 
    </Container>
  )
}

export default CurrentWeatherCard;