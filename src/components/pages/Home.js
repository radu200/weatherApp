import React from "react";
import bgImage from "../../assets/media/images/pattern.svg";
import NavBar from '../navbar/NavBar'
import style from "./HomePage.module.scss";
import SearchWeatherForm from '../forms/SearchWeather'


const Home = () => {
  return (
    <>
      <NavBar />
      <img className={style.bg_image} alt="background" src={bgImage} />

      <div className={style.home_container}>
      
        <div className={style.home_title}>Enter a City and State</div>

        <div className={style.form_container}>
          <SearchWeatherForm />
        </div>
      </div>
    </>
  );
};

export default Home;
