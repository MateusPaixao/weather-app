import { getWeekDay } from './date'

const getWeek = (list: any) => {
    const timezone = 'GMT-0400'
    const weekForecast: any = []
    
    list.forEach((item: any) => {
        if(weekForecast.length < 4){
            const isAdded = weekForecast.find((day: any) => {
                const [dateAdded] = day.date.split(' ')
                const [dateToBeAdded] = item.dt_txt.split(' ')
                return dateAdded === dateToBeAdded
            })

            if(!isAdded){
                const [weather] = item.weather
                const [dateToBeAdded] = item.dt_txt.split(' ')

                weekForecast.push({
                    pop: `${item.pop*100}%`,
                    humidity: `${item.main.humidity}%`,
                    wind: `${Math.round(item.wind.speed)} Km/h`,
                    icon: weather.icon,
                    weekDay: getWeekDay(new Date(`${dateToBeAdded} ${timezone}`), 'short'),
                    temp: `${Math.round(item.main.temp)}°C`,
                    date: item.dt_txt,
                })
            }          
        }
    })

    return weekForecast
}

const ForecastHelper = {
    getWeek,
}

export default ForecastHelper