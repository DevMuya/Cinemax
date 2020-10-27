import React, { Fragment } from "react";
import movie from "../images/Avengers-Infinity-War-Poster-by-Entertainment-Weekly-5.jpg";
import Float from "./floatingMenu";

var sectionStyle = {
  backgroundImage: `url(${movie})`,
};
function Movie() {
  return (
    <Fragment>
      <div className="movie-home md:hidden relative bg-right-top">
        <div
          className="movie-card md:hidden w-full h-full "
          style={sectionStyle}
        >
          <div className="movie-about">
            <div className="text-movie mr-4 mb-32 z-50 text-lg shadow bg-black text-yellow-600">
              <p className="movie-name">
                <i class="fa fa-film" aria-hidden="true"></i> Avangers
              </p>
              <p className="movie-director">Joss Whedon</p>
              <p className="showing-date">
                <i class="fa fa-calendar mr-2" aria-hidden="true"></i> 11 - 20 -
                2020
              </p>
              <p className="likes">
                <i class="fa fa-heart mr-2" aria-hidden="true"></i> 1020 likes
              </p>
              <p className="showing-by">
                <i class="fab fa-dashcube mr-2"></i> Imax{" "}
              </p>
              <p className="venue">
                <i class="fa fa-home mr-2" aria-hidden="true"></i> Garden City
                Mall
              </p>
              <p className="venue">
                <i class="fa fa-location-arrow mr-2" aria-hidden="true"></i>{" "}
                Thika Road
              </p>

              <p className="tickets"></p>
            </div>
            <div className="text-mov z-10"></div>
          </div>
        </div>

        <Float />
      </div>
    </Fragment>
  );
}

export default Movie;
