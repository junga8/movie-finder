import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";

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
              alt="card image"
              style={{ wifth: "100%", height: 360 }}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
              alt="card image"
              style={{ wifth: "100%", height: 360 }}
            />
          )}
        </div>
        <div className="col s12 m8">
          <select
            className="waves-effect waves-light btn"
            style={{ display: "inline" }}
            onChange={props.handleSort}
          >
            <option value="" disabled selected>
              Select Language
            </option>

            <option value="English">English</option>
            <option value="German">German</option>
            <option value="French">French</option>
          </select>
          <div className="info-container">
            <p>{props.currentMovie.title}</p>

            <p>
              {props.currentMovie.release_date
                .substring(5)
                .split("-")
                .concat(props.currentMovie.release_date.substring(0, 4))
                .join("/")}
            </p>
            <p>{props.currentMovie.overview}</p>
            <p>{props.currentMovie.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
