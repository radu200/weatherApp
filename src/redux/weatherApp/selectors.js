import { createSelector } from "reselect";
import { formatDate, iconPath } from "../../utils/Utils";

const getData = state => state.weather
const getWeatherList = state => state.weather.data.list;
const getDayId = state => state.weather.dayId;



export const getLoading = createSelector(getData, (w) => {
   return w.loading
})


export const getCity = createSelector(getData, (w) => {
  const city =  w.data.city && w.data.city['name']
   return city 
})


export const getDayList  = createSelector(getWeatherList, (d) => {
   
  const days = d && d.map(w => w.weather.map(d => ({
      id:w.dt,
      icon:iconPath(d.icon),
      date:formatDate(w.dt_txt)
    }))).reduce((acc, val) => acc.concat(val),[])

    return days 
})


const getDayDetails = (day, id) => {
  //get single day data
  const dayWeather = day && day.filter(day => (day.dt === id ? day : null));
  
  // select data for that component need
  const dayDetails  = dayWeather && dayWeather.map(w => w.weather.map(d => ({
      id:w.dt,
      date:formatDate(w.dt_txt),
      temp_min:w.main.temp_min,
      temp_max:w.main.temp_max,
      humidity:w.main.humidity,
      icon:iconPath(d.icon),
      description:d.description

   })))

  return dayDetails && dayDetails[0];
};

export const getDaySelector = createSelector(
  getWeatherList,
  getDayId,
  getDayDetails
); 
