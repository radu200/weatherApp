import {weatherReducer }from './reducers'
import { REQUEST_WEATHER, RECEIVE_WEATHER,FAILURE_WEATHER, GET_DAY} from './constants'


describe('weather reducer ', () => {
    const initialState = {
        data:[],
        loading: false,
        error:null,
        dayId:[]
    }

   it('should provide the initial state,', () => {
       expect(weatherReducer(undefined, {})).toEqual(initialState)
   })

   it('should handle REQUEST_WEATHER action', () => {
   
    const state = {
        data:[],
        loading: true,
      }

 
    expect(weatherReducer({}, {type:REQUEST_WEATHER})).toEqual(state)
})
   it('should handle RECEIVE_WEATHER action', () => {
       const state = {
         data : [1,2,3,4], 
         loading: false
         }
    
       expect(weatherReducer({}, {type:RECEIVE_WEATHER, data:[1,2,3,4]})).toEqual(state)
   })

   

   it('should handle FAILURE_WEATHER action', () => {
    const state = {
     error:'err', 
      loading: false
      }
 
    expect(weatherReducer({}, {type:FAILURE_WEATHER, err:'err'})).toEqual(state)
})

it('should handle GET_DAY action', () => {
    const state = { 
      loading: false,
      dayId:1
      }
 
    expect(weatherReducer({}, {type:GET_DAY, id:1})).toEqual(state)
})
 

})