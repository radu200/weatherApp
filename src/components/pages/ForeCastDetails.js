import React from "react";
import NavBar from "../navbar/NavBar";
import style from "./ForeCast.module.scss";
import ForeCast from "./ForeCast";
import PropTypes from "prop-types";

const ForeCastDetails = ({
  data, 
  city
}) => {
  return (
    <>
      <NavBar />
    
      <div className={style.details_page_container}>
     
      <h2 className={style.header}>{city}</h2>

        {data && data.map(w =>
          w.weather.map(d => {
            return (
              <div key={w.dt}>
                <ForeCast photo={d.icon} date={w.dt_txt} />
                <p className={style.text_font}>{d.description}</p>
                {w.main.temp_min && <p className={style.text_font}> min temp : {w.main.temp_min}</p>}
                {w.main.temp_max && <p className={style.text_font}> max temp : {w.main.temp_max}</p>}
                {w.main.humidity && <p className={style.text_font}> humidity : {w.main.humidity}</p>}
              </div>
            )
          })
        )}
      </div>
    </>
  );
};

ForeCastDetails.propTypes = {
  data:PropTypes.array,
  city:PropTypes.string
}
export default ForeCastDetails;
