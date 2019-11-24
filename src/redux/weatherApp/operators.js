
import { receiveWeather, failureWeather, requestWeather} from './actions'
import * as axios from 'axios'
const instance = axios.create()

const API_KEY = 'd4ff336eb78b41ebf8bb0499f3578364'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`;   

export const fetchWeather =  (city) => (dispatch)=> {  
    const url = `${ROOT_URL}q=${city}&appid=${API_KEY}&type=accurate&units=metric`;

      instance.get(url)
        .then(res => {
           dispatch(receiveWeather(res.data))   
        })
        .catch(err => {
            dispatch(requestWeather(err))
        })

   } 


   
