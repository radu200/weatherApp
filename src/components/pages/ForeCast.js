import React from "react";
import style from "./ForeCast.module.scss";
import PropTypes from "prop-types";



const ForeCast = ({date, photo}) => {
  return (
    <div className={style.day_container}>
      <img  className={style.icons} alt="weather"  src={photo}/> 
      <p  className={style.text_font}>{date}</p>
    </div>
  );
};

ForeCast.propTypes = {
  date:PropTypes.string,
  photo:PropTypes.string
}


export default ForeCast;
