import React from 'react';
import { Sun } from 'react-feather'

import { Container } from './styles';

const CardWeekDay: React.FC = () => {
  return (
    <Container>
      <Sun />
      <span>Tue</span>
      <strong>29°C</strong>
    </Container>
  )
}

export default CardWeekDay;