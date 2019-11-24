import React from "react";
import style from "./ForeCast.module.scss";
import PropTypes from "prop-types";
import { formatDate, iconPath } from "../../utils/Utils";



const ForeCast = ({date, photo}) => {
  return (
    <>
      <img  className={style.icons} alt="weather"  src={iconPath(photo)}/> 
      <p className={style.text_font}>{formatDate(date)}</p>
    </>
  );
};

ForeCast.propTypes = {
  date:PropTypes.string,
  photo:PropTypes.string
}


export default ForeCast;
