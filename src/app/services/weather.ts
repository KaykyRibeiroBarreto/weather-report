import axios from 'axios';
import { OPENWEATHER_API_KEY, OPENWEATHER_BASE_URL } from '../constants/api';   

export const fetchWeather = async (city: string) => {
try{
    const response = await axios.get(OPENWEATHER_BASE_URL, {
        params: {
            q: city,
            appid: OPENWEATHER_API_KEY,
            units: 'metric',
            lang: 'pt_br'
        }
    });
    
    return response.data;
} catch (error) {
    throw new Error('Erro ao buscar clima');
    
}
}

