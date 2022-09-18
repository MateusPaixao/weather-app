import { DateHelper } from ".";

const { getWeekDay, getFullDate } = DateHelper

const dateMocked = new Date('2022-09-18 GMT-0400');

describe('DateHelper helper', () => {
    it('should return the week day long', () => {
        const weekDay = getWeekDay(dateMocked)
        expect(weekDay).toBe('domingo')
    })

    it('should return the week day short', () => {
        const weekDay = getWeekDay(dateMocked, 'short')
        expect(weekDay).toBe('dom')
    })

    it('should return full date', () => {
        const fullDate = getFullDate(dateMocked)
        expect(fullDate).toBe('18 set. 2022')
    })
})