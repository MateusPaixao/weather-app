import { render, screen, fireEvent } from '@testing-library/react';
import CardWeekDay from '.';

const dayForecastMocked = {
    date: "2022-09-22 00:00:00",
    humidity: "95%",
    icon: "10n",
    onClick: jest.fn(),
    pop: "100%",
    selected: false,
    temp: "17°C",
    weekDay: "qui",
    wind: "3 Km/h",
}

describe('CardWeekDay Component', () => {
    it('should renders correctly', () => {
        render( <CardWeekDay {...dayForecastMocked} /> )

        const card = screen.getByTestId('card-week-day')

        expect(card).toBeInTheDocument()
        expect(screen.getByText('17°C')).toBeInTheDocument()
    })

    it('should renders selected', () => {
        render( <CardWeekDay {...dayForecastMocked} selected /> )

        const card = screen.getByTestId('card-week-day')
        expect(card).toHaveClass('selected')
    })

    it('should call function passed', () => {
        render( <CardWeekDay {...dayForecastMocked} /> )

        const card = screen.getByTestId('card-week-day')
        fireEvent.click(card)
        expect(dayForecastMocked.onClick).toHaveBeenCalled()
    })
})