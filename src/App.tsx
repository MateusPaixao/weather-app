import React, { Fragment } from 'react';

import { CurrentWeatherCard, ForecastWeatherCard } from 'components';

import GlobalStyles, { Container, Content } from 'GlobalStyles';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <Content>
          <CurrentWeatherCard />
          <ForecastWeatherCard />
        </Content>
      </Container>
    </Fragment>
  );
}

export default App;
