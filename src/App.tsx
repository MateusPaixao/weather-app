import React, { Fragment } from 'react';

import { CurrentWeatherCard, ForecastWeatherCard } from 'components';

import GlobalStyles, { Container, Content } from 'GlobalStyles';

function App() {
  // useEffect(() => {
  //   axios.get('https://api.openweathermap.org/data/2.5/forecast', {
  //     params: {
  //       cnt: 40,
  //       units: 'metric',
  //       lat: -23.500830,
  //       lon: -46.586660,
  //       appid: '65504526a6b2ca69cafc678b6921176c',
  //       lang: 'pt_br',
  //     }
  //   })
  //   .then(({data}) => {
      
  //     const weekForecast: any = []
  //     data.list.forEach((item: any) => {
  //       if(weekForecast.length < 4){
  //         const isAdded = weekForecast.find((day: any) => {
            
  //           const [dateAdded] = day.dt_txt.split(' ')
  //           const [dateToBeAdded] = item.dt_txt.split(' ')
            
  //           return dateAdded === dateToBeAdded
  //         })

  //         if(!isAdded){
  //           weekForecast.push(item)
  //         }          
  //       }
  //     })

  //     console.log(weekForecast) // Forecast
  //   })
  // }, [])

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
