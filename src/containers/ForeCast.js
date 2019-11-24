import React from 'react'
import PropTypes from 'prop-types'
import ForeCastList from '../components/pages/ForeCastList'
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/weatherApp/operators'
import { getDay } from '../redux/weatherApp/actions'
import { getWeather, getLoading, getCity } from '../redux/weatherApp/selectors'

const ForeCast = ({ history, getDay, city, weather, handleDayClick, isLoading }) => {

  handleDayClick = (id) => {
    getDay(id)
    history.push(`/details/${city}`)

  }

  return (
    <div>
      <ForeCastList
        city={city}
        isLoading={isLoading}
        handleDayClick={handleDayClick}
        data={weather}
      />

    </div>
  )
}


const mapState = state => {
  return {
    weather: getWeather(state),
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