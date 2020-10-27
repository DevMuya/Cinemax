import React, { Fragment } from "react";

// import Swiper core and required components
// import SwiperCore from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// import movied from "../images/Avengers-Infinity-War-Poster-Fan-Made-Poster-Collection-17.jpg";
import movie from "../images/Avengers-Infinity-War-Poster-Fan-Made-Poster-Collection-2.jpg";
// install Swiper components
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);





function Swipe() {
  // var sectinStyle = {
  //   backgroundImage: `url(${movied})`,
  // };
  return (
    <Fragment>
      <span className="text-base font-extrabold mt-1 md:hidden text-white">
        Category Name
      </span>
      <div className="slide-holder h-64 md:hidden">
        <Swiper
          spaceBetween={5}
          slidesPerView={2}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="slide shadow-lg"
        >
          <SwiperSlide className="slide-item h-full w-full shadow">
            <div className="movit h-full w-full">
              <img className="" src={movie} alt="" srcset="" />

              <div className=" mov-details ml-2 z-50  place-items-auto  text-base font-bold text-white absolute bottom-0 mb-4 flex flex-col text-center">
                <p className="movie-title ">
                  <i class="fa fa-film " aria-hidden="true"></i> Avangers End
                  Game
                </p>
                <p className="showingdate">
                  <i class="fa fa-calendar" aria-hidden="true"></i> 11 - 12
                  -2020
                </p>
                <p className="venue">
                  <i class="fa fa-map-pin" aria-hidden="true"></i> Imax GCM
                </p>
              </div>

              <div className="bg z-40 w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide-item h-full w-full shadow">
            <div className="movit h-full w-full">
              <img className="" src={movie} alt="" srcset="" />

              <div className=" mov-details ml-2 z-50  place-items-auto  text-base font-bold text-white absolute bottom-0 mb-4 flex flex-col text-center">
                <p className="movie-title ">
                  <i class="fa fa-film " aria-hidden="true"></i> Avangers End
                  Game
                </p>
                <p className="showingdate">
                  <i class="fa fa-calendar" aria-hidden="true"></i> 11 - 12
                  -2020
                </p>
                <p className="venue">
                  <i class="fa fa-map-pin" aria-hidden="true"></i> Imax GCM
                </p>
              </div>

              <div className="bg z-40 w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide-item h-full w-full shadow">
            <div className="movit h-full w-full">
              <img className="" src={movie} alt="" srcset="" />

              <div className=" mov-details ml-2 z-50  place-items-auto  text-base font-bold text-white absolute bottom-0 mb-4 flex flex-col text-center">
                <p className="movie-title ">
                  <i class="fa fa-film " aria-hidden="true"></i> Avangers End
                  Game
                </p>
                <p className="showingdate">
                  <i class="fa fa-calendar" aria-hidden="true"></i> 11 - 12
                  -2020
                </p>
                <p className="venue">
                  <i class="fa fa-map-pin" aria-hidden="true"></i> Imax GCM
                </p>
              </div>

              <div className="bg z-40 w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
}

export default Swipe;
