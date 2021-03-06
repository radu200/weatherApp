import React from "react";
import PropTypes from 'prop-types'
import Navbar from "../navbar/NavBar";
import style from "./ForeCast.module.scss";
import ForeCast from "./ForeCast";
import Loading from "./Loading";

const ForeCastList = ({ data, handleDayClick, city, isLoading }) => {
  return (
    <>
      <Navbar />

      {isLoading && <Loading />}

      <h2 className={style.header}>{city}</h2>

      <div className={style.foreCast_container}>
        {data && data.map(w =>
          <div key={w.id} onClick={() => handleDayClick(w.id)}>
            <ForeCast date={w.date} photo={w.icon} />
          </div>
        )}
      </div>
    </>
  );
};

ForeCastList.propTypes = {
  data: PropTypes.array,
  handleDayClick: PropTypes.func,
  city: PropTypes.string,
  isLoading: PropTypes.bool
}

export default ForeCastList;
