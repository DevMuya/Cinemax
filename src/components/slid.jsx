import React, { useState, useEffect, useRef, Fragment } from "react";

// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import movi from "../images/alien-movie-poster-sigourney-weaver-movie-poster-wallpaper-preview (2).jpg";
import MovieAbout from "./movie-about";
import Categories from "../pages/categories";
import Float from "./floatingMenu";

function Slid() {
  const outside = useRef();
  const [isOpen, setisOpen] = useState(false);

  const handleClick = (e) => {
    if (outside.current.contains(e.target)) {
      return;
    }
    setisOpen(false);
  };
  useEffect(() => {
    const getClick = document.addEventListener("click", handleClick);
    return () => {
      getClick();
    };
  }, []);

  var sectinStyle = {
    backgroundImage: `url(${movi})`,
  };
  return (
    <Fragment>
      <div className="home-slider h-screen w-full ">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="slide-home"
        >
          <SwiperSlide>
            <div
              className="holder-x w-full  h-screen bg-cover bg-center"
              Style={{ sectinStyle }}
            >
              <img className=" img-fill h-full" src={movi} alt="" srcset="" />
            </div>
            <div className="showing-date absolute top-0 mt-4 ml-4">
              <p className="text-showing text-base font-semibold text-yellow-400">
                Showing :{" "}
              </p>
              <p className="date text-base text-yellow-400">11 - 20 - 2020</p>
            </div>

            <div
              onClick={() => {
                setisOpen(!isOpen);
              }}
              ref={outside}
              className="info bg-red-600 h-10 w-10 flex rounded-full absolute top-0 mt-32 ml-8 cursor-pointer"
            >
              {" "}
              <i class="fa fa-info mx-auto my-auto" aria-hidden="true"></i>
            </div>
            {isOpen ? <MovieAbout /> : null}

            <div className="buy-ticket absolute h-8 flex align-middle cursor-pointer bottom-0 rounded mb-10  ml-32 transition duration-500 ease-in-out bg-blue-500  transform hover:-translate-y-1 hover:scale-110 ">
              <p className="book  text-base font-semibold mx-auto my-auto cursor-pointer">
                Buy Ticket
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Float />
      <Categories />
    </Fragment>
  );
}

export default Slid;