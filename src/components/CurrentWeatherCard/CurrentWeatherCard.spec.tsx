import React, { ReactNode } from 'react'
import { render, screen } from '@testing-library/react';

import { WeatherContext, CurrentWeatherProps } from 'contexts/WeatherContext'

import CurrentWeatherCard from '.';

const coordsMocked = {
    latitude: -23.4961416,
    longitude: -46.5799415,
}

const currentWeatherMocked: CurrentWeatherProps = {
    weekDay: 'Domingo',
    date: '18 set. 2022',
    location: 'pinheiros, BR',
    icon: '13n',
    temp: '11°C',
    description: 'nuvens dispersas'
}

const mockGeolocation = {
    getCurrentPosition: jest.fn()
    .mockImplementationOnce((success) => Promise.resolve(success({
        coords: coordsMocked
    })))
};

// geolocation is a read-only property needs casting with as
(window as any).navigator.geolocation = mockGeolocation;

const customRender = (children: ReactNode, props: any) => {
    return render(
        <WeatherContext.Provider value={props}>
            {children}
        </WeatherContext.Provider>
    )
}

describe('CurrentWeatherCard Component', () => {
    it('should renders with loading', () => {
        const providerProps = {
            isLoadingCurrent: true,
            // currentWeather: currentWeatherMocked
        }

        const element = customRender(<CurrentWeatherCard />, providerProps)

        const loading = screen.getByTestId('loading')
        expect(loading).toBeInTheDocument()

        console.log(element.container.innerHTML)
    })

    it('should renders correctly', () => {
        const providerProps = {
            isLoadingCurrent: false,
            currentWeather: currentWeatherMocked
        }

        customRender(<CurrentWeatherCard />, providerProps)

        Object.keys(currentWeatherMocked).forEach(prop => {
            if(prop !== 'icon'){
                expect(screen.getByText(currentWeatherMocked[prop as keyof CurrentWeatherProps])).toBeInTheDocument()    
            }
        })

        // TODO: build icon logic and test it
    })
})