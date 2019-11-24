import React from "react";
import SearchWeatherForm from "../forms/SearchWeather";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={style.navbar}>
      <h1 className={style.title}>WeatherApp</h1>
      <div>
        <SearchWeatherForm/>
      </div>
    </div>
  );
};

export default NavBar;
