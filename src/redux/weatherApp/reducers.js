import { REQUEST_WEATHER, RECEIVE_WEATHER,FAILURE_WEATHER, GET_DAY} from './constants'
  const initialState = {
      data:[],
      loading: false,
      error:null,
      dayId:[]
  }
export const weatherReducer = (state = initialState, action) => {
    switch(action.type){
         case REQUEST_WEATHER:
              return {...state, loading:true, data:[]}
         case RECEIVE_WEATHER:
             return {...state, loading:false, data:action.data}
         case FAILURE_WEATHER:
              return {...state, loading:false, error:action.err,}
        case GET_DAY:
              return {...state, loading:false, dayId:action.id}
          default:
              return state
    }
}



