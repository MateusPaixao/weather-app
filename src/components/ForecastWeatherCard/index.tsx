import React from 'react';

import { MapPin } from 'react-feather'

import { CardWeekDay } from 'components'

import { Container, Details, WeekContainer, ButtonContainer } from './styles';

const ForecastWeatherCard: React.FC = () => {
  return (
    <Container>
        <Details>
          <li>
            <span>precipitation</span>
            <span>0%</span>
          </li>
          <li>
            <span>humidity</span>
            <span>34%</span>
          </li>
          <li>
            <span>wind</span>
            <span>0 km/h</span>
          </li>
        </Details>

        <WeekContainer>
          <CardWeekDay />
          <CardWeekDay />
          <CardWeekDay />
          <CardWeekDay />
        </WeekContainer>

        <ButtonContainer>
          <button type="button">
            <MapPin size={15} />
            <span>Update Weather</span>
          </button>
        </ButtonContainer>
    </Container>
  )
}

export default ForecastWeatherCard;