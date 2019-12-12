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
        {data && data.map(w => {
          return (
            <div key={w.id}>
              <ForeCast photo={w.icon} date={w.date} />
              <p data-testid='city' className={style.text_font}>{city}</p>
              <p data-testid='description'  className={style.text_font}>{w.description}</p>
              {w.temp_min && <p data-testid='minTemp'  className={style.text_font}> min temp : {w.temp_min}</p>}
              {w.temp_max && <p data-testid='maxTemp'  className={style.text_font}> max temp : {w.temp_max}</p>}
              {w.humidity && <p  data-testid='humidity'  className={style.text_font}> humidity : {w.humidity}</p>}
            </div>
          )
        })

        }
      </div>
    </>
  );
};

ForeCastDetails.propTypes = {
  data: PropTypes.array,
  city: PropTypes.string
}
export default ForeCastDetails;
