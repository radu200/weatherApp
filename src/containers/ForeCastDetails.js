import React from "react";
import PropTypes from 'prop-types'
import ForeCastDeatils from "../components/pages/ForeCastDetails";
import { connect } from "react-redux";
import { fetchWeather } from "../redux/weatherApp/operators";
import { getDaySelector, getCity } from "./../redux/weatherApp/selectors";

const ForeCastDetails  = ({data, city })  => {
  return (
      <>
        <ForeCastDeatils
          city={city}
          data={data}
        />
      </>
    );

  }

const mapState = state => {
  return {
    city: getCity(state),
    data:getDaySelector(state)
  };
};

ForeCastDetails.propTypes = {
  city:PropTypes.string,
  data:PropTypes.array
}

export default connect(mapState, { fetchWeather })(ForeCastDetails);
