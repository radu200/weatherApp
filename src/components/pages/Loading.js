import React from "react";
import style from "./Loading.module.scss";

const isLoading = () => {
    return <p className={style.isLoading}>Loading...</p>;
};

export default isLoading;
