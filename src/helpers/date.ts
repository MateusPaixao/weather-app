
type weekDayType = "long" | "short" | "narrow" | undefined

const getWeekDay = (date = new Date(), type?: weekDayType) => {
    const weekDay = date.toLocaleDateString('pt-BR', {
        weekday: type || 'long',
    })

    return weekDay.replace('.', '')
}           

const getFullDate = (date = new Date()) => {
    const regex = /de /g;
    const fullDate = date.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })

    return fullDate.replace(regex, '')
}

const DateHelper = {
    getWeekDay,
    getFullDate,
}

export default DateHelper