import { ForecastHelper } from ".";
import { responseMocked, weekForecastMocked } from './Forecast.mock'

describe('getWeek function', () => {
    it('should return the forecast object', () => {
        const weekForecast = ForecastHelper.getWeek(responseMocked)
        expect(weekForecast).toMatchObject(weekForecastMocked)
    })
})