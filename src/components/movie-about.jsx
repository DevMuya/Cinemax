import React,{Fragment} from 'react'


function MovieAbout() {

    
    return (
      <Fragment>
        <div className="movie-about absolute top-0 ml-10  mt-48 transition duration-500 ease-in-out">
          <div className="text-movie  z-50 text-lg shadow">
            <p className="movie-name">
              <i class="fa fa-film" aria-hidden="true"></i> Avangers
            </p>
            <p className="movie-director">Joss Whedon</p>
            <p className="showing-date">
              <i class="fa fa-calendar mr-1" aria-hidden="true"></i> 11 - 20 -
              2020
            </p>
            <p className="likes">
              <i class="fa fa-heart mr-1" aria-hidden="true"></i> 1020
            </p>
            <p className="showing-by">
              <i class="fab fa-dashcube mr-1"></i> Imax{" "}
            </p>
            <p className="venue">
              <i class="fa fa-home mr-1" aria-hidden="true"></i> Garden City
              Mall
            </p>
            <p className="venue">
              <i class="fa fa-location-arrow mr-1" aria-hidden="true"></i> Thika
              Road
            </p>

            <p className="tickets"></p>
          </div>
          <div className="text-mov z-10"></div>
        </div>
      </Fragment>
    );
}

export default MovieAbout
