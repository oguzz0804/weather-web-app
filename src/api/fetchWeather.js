import axios from 'axios';

const URL = 'process.env.API_URL'
const API_KEY = 'process.env.API_KEY'

const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })

    return data
}

export default fetchWeather
