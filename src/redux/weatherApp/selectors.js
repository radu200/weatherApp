import { createSelector } from "reselect";

export const getWeather = state =>  state.weather.data.list;

const getData = state => state.weather


export const getLoading = createSelector(getData, (w) => {
   return w.loading
})


export const getCity = createSelector(getData, (w) => {
  const city =  w.data.city && w.data.city['name']
   return city
})

const getDayId = state => state.weather.dayId;

const getDayDetails = (day, id) => {
  const dayWeather = day && day.filter(day => (day.dt === id ? day : null));

  return dayWeather;
};

export const getDaySelector = createSelector(
  getWeather,
  getDayId,
  getDayDetails
); 
