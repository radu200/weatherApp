import { createSelector } from "reselect";

export const getWeather = state =>  state.weather.data.list;

export const getLoading = state => state.weather.loading;

export const getCity = state => {
  const city = state.weather.data.city;
  const cityName = city && `${city["name"]}`;
  return cityName;
};

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
