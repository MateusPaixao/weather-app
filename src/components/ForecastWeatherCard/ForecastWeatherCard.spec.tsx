import React, { ReactNode } from 'react'
import { render, screen } from '@testing-library/react';

import { WeatherContext } from 'contexts/WeatherContext'

import ForecastWeatherCard from '.';

const forecastWeatherMocked = [
    {
        date: "2022-09-19 00:00:00",
        humidity: "79%",
        icon: "03n",
        pop: "0%",
        temp: "15°C",
        weekDay: "seg",
        wind: "4 Km/h",
    },
    {
        date: "2022-09-20 00:00:00",
        humidity: "70%",
        icon: "04n",
        pop: "0%",
        temp: "16°C",
        weekDay: "ter",
        wind: "4 Km/h",
    },
    {
        date: "2022-09-21 00:00:00",
        humidity: "89%",
        icon: "10n",
        pop: "100%",
        temp: "19°C",
        weekDay: "qua",
        wind: "3 Km/h",
    },
    {
        date: "2022-09-22 00:00:00",
        humidity: "95%",
        icon: "10n",
        pop: "100%",
        temp: "17°C",
        weekDay: "qui",
        wind: "3 Km/h",
    }
]

const customRender = (children: ReactNode, props: any) => {
    return render(
        <WeatherContext.Provider value={props}>
            {children}
        </WeatherContext.Provider>
    )
}

describe('ForecastWeatherCard Component', () => {
    it('should renders with loading', () => {
        const providerProps = {
            isLoadingForecast: true,
        }

        customRender(<ForecastWeatherCard />, providerProps)
        const loading = screen.getByTestId('loading')
        expect(loading).toBeInTheDocument()
    })

    it('should renders correctly', () => {
        const providerProps = {
            isLoadingForecast: false,
            forecastWeather: forecastWeatherMocked,
            selectedForecast: forecastWeatherMocked[0],
        }

        customRender(<ForecastWeatherCard />, providerProps)

        const card = screen.getAllByTestId('card-week-day')
        expect(card).toHaveLength(4)
    })
})