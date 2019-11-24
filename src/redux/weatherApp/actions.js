import { REQUEST_WEATHER, RECEIVE_WEATHER,FAILURE_WEATHER, GET_DAY} from './constants'


export const requestWeather = () => {
    return {
          type:REQUEST_WEATHER
    }
}

export  const receiveWeather = data => {
    return {
        type:RECEIVE_WEATHER,
        data
    }
}  

export const failureWeather = err => {
    return {
        type:FAILURE_WEATHER,
        err
    }
}

export const getDay = id => {
    return {
        type: GET_DAY,
        id
    }
}




