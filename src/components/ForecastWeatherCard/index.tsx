import React, { Fragment } from 'react';
import { useWeatherContext } from 'contexts/WeatherContext'

import { RefreshCw } from 'react-feather'

import { CardWeekDay, Loading } from 'components'

import { Container, Details, WeekContainer, ButtonContainer } from './styles';

const ForecastWeatherCard: React.FC = () => {
  const { forecastWeather, selectedForecast, setSelectedForecast, isLoadingForecast, updateWeather } = useWeatherContext()

  return (
    <Container>
        { isLoadingForecast ? (
          <Loading />
        ) : (
          <Fragment>
            <Details>
              <li>
                <span>precipitação</span>
                <span>{selectedForecast.pop}</span>
              </li>
              <li>
                <span>umidade</span>
                <span>{selectedForecast.humidity}</span>
              </li>
              <li>
                <span>vento</span>
                <span>{selectedForecast.wind}</span>
              </li>
            </Details>

            <WeekContainer>
              { forecastWeather.map(day => 
                <CardWeekDay 
                  key={day.date} 
                  onClick={() => setSelectedForecast(day)}
                  selected={selectedForecast.date === day.date} {...day} 
                />
              ) }
            </WeekContainer>

            <ButtonContainer>
              <button type="button" onClick={updateWeather}>
                <RefreshCw size={15} />
                <span>Atualizar</span>
              </button>
            </ButtonContainer>
          </Fragment>
        ) }
    </Container>
  )
}

export default ForecastWeatherCard;