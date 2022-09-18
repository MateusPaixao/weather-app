import React from 'react';
import { Sun } from 'react-feather'

import { ForecastWeatherProps } from 'contexts/WeatherContext'

import { Container } from './styles';

interface CardWeekDayProps extends ForecastWeatherProps {
  selected: boolean,
  onClick: () => void,
}

const CardWeekDay: React.FC<CardWeekDayProps> = (props) => {
  return (
    <Container onClick={() => props.onClick()} className={props.selected ? 'selected' : ''}>
      <Sun />
      <span>{props.weekDay}</span>
      <strong>{props.temp}</strong>
    </Container>
  )
}

export default CardWeekDay;