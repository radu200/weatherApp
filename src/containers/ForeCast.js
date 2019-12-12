import React, {useEffect}from 'react'
import PropTypes from 'prop-types'
import ForeCastList from '../components/pages/ForeCastList'
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/weatherApp/operators'
import { getDay } from '../redux/weatherApp/actions'
import {  getLoading, getCity, getDayList} from '../redux/weatherApp/selectors'

const ForeCast = ({ history, getDay, city, weather, handleDayClick, isLoading }) => {

  handleDayClick = (id) => {
    getDay(id)
    history.push(`/details/${city}`)

  }

  useEffect(() => {
     console.log(window.location)
  })
  return (
      <ForeCastList
        city={city}
        isLoading={isLoading}
        handleDayClick={handleDayClick}
        data={weather}
      />
  )
}


const mapState = state => {
  return {
    weather: getDayList(state),
    isLoading: getLoading(state),
    city: getCity(state)
  }
}

ForeCast.propTypes = {
  history:PropTypes.object,
  getDay:PropTypes.func,
  city:PropTypes.string,
  handleDayClick:PropTypes.func,
  isLoading:PropTypes.bool

}


export default connect(mapState, { fetchWeather, getDay })(ForeCast);
