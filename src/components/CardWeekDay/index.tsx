import React from 'react';
import { IconWeather } from 'components'

import { ForecastWeatherProps } from 'contexts/WeatherContext'

import { Container } from './styles';

interface CardWeekDayProps extends ForecastWeatherProps {
  selected: boolean,
  onClick: () => void,
}

const CardWeekDay: React.FC<CardWeekDayProps> = (props) => {
  return (
    <Container data-testid="card-week-day" onClick={() => props.onClick()} className={props.selected ? 'selected' : ''}>
      <IconWeather name={props.icon} />
      <span>{props.weekDay}</span>
      <strong>{props.temp}</strong>
    </Container>
  )
}

export default CardWeekDay;