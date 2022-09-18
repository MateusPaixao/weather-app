import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        units: 'metric',
        lang: 'pt_br',
        appid: '65504526a6b2ca69cafc678b6921176c',
    }
})

export default api