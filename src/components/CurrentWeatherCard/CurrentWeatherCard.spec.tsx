import React from 'react'
import { render, screen } from '@testing-library/react';

import { WeatherProvider } from 'contexts/WeatherContext'

import CurrentWeatherCard from '.';

const coordsMocked = {
    latitude: -23.4961416,
    longitude: -46.5799415,
}

const mockGeolocation = {
    getCurrentPosition: jest.fn()
    .mockImplementationOnce((success) => Promise.resolve(success({
        coords: coordsMocked
    })))
};

// geolocation is a read-only property needs casting with as
(window as any).navigator.geolocation = mockGeolocation;

describe('CurrentWeatherCard Component', () => {
    it('should renders correctly', () => {
        
        jest.spyOn(React, 'useEffect').mockImplementation((f) => f())
        const setCoordMock = jest.fn(() => coordsMocked)
        const useStateMock: any = (useState: any) => [useState, setCoordMock]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock)

        const element = render( 
            <WeatherProvider>
                <CurrentWeatherCard /> 
            </WeatherProvider>
        )

        console.log(element.container.innerHTML)
    })
})