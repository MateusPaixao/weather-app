import React from 'react';

import { CurrentWeatherCard, ForecastWeatherCard } from 'components';

import { Container } from 'GlobalStyles';

function App() {
  return (
    <Container>
      <CurrentWeatherCard />
      <ForecastWeatherCard />
    </Container>
  );
}

export default App;
