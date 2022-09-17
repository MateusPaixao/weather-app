import React, { Fragment } from 'react';

import { CurrentWeatherCard, ForecastWeatherCard } from 'components';

import GlobalStyles, { Container } from 'GlobalStyles';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <CurrentWeatherCard />
        <ForecastWeatherCard />
      </Container>
    </Fragment>
  );
}

export default App;
