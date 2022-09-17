import React from 'react';

import { MapPin, Sun } from 'react-feather'

import { Container, DateLocation, WeatherInfo } from './styles';

const CurrentWeatherCard: React.FC = () => {
  return (
    <Container>
        <DateLocation>
          <section>
            <h2>Saturday</h2>
            <span>15 Jan 2019</span>
          </section>
          <p>
            <MapPin size={18} /> <span>Paris, FR</span>
          </p>
        </DateLocation>

        <WeatherInfo>
          <Sun size={60} />
          <section>
            <h1>29°C</h1>
            <span>Sunny</span>
          </section>
        </WeatherInfo> 
    </Container>
  )
}

export default CurrentWeatherCard;