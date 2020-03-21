import React from "react";

const MovieInfo = props => {
  return (
    <div className="container">
      <div
        className="row"
        onClick={props.closMovieinfo}
        style={{ cursor: "pointer", paddingTop: 50 }}
      >
        <i className="fas fa-arrow-left"></i>
        <span style={{ margineLeft: 10 }}> Go Back</span>
      </div>
      <div className="row">
        <div className="col s12 m4">
          {props.currentMovie.poster_path == null ? (
            <img
              src={
                "https://11luuvtufne6f2y33i1nvedi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/no-image-icon.png"
              }
              alt="Card image"
              style={{ wifth: "100%", height: 360 }}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
              alt="Card image"
              style={{ wifth: "100%", height: 360 }}
            />
          )}
        </div>
      </div>

      <div className="col s12 m8">
        <div className="info-Container">
          <p>{props.currentMovie.title}</p>
          <p>{props.currentMovie.release_date}</p>
          <p>{props.currentMovie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
