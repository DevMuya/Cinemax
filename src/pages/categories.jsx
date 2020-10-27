import React, { Fragment } from "react";
import Swipe from "../components/swiper";

function Categories() {
  return (
    <Fragment>
      <div className="categories w-full h-screen flex flex-col">
        <div className="top-bar w-full sm:visible  bg-black flex flex-row mb-2 "></div>

        <Swipe />
        <Swipe />
        <Swipe />
      </div>
    </Fragment>
  );
}

export default Categories;
