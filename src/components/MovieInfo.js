import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import { Rating } from "@material-ui/lab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Cell } from "react-mdl";

const MovieInfo = (props) => {
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
            //onChange={props.handleSort}
          >
            <option value="" disabled selected>
              Select Language
            </option>

            <option value="English">English</option>
            <option value="German">German</option>
            <option value="French">French</option>
          </select>
          <div className="info-container">
            <h5>
              {" "}
              <em>{props.currentMovie.title}</em>
            </h5>
            <p>
              <em>
                {props.currentMovie.release_date
                  .substring(5)
                  .split("-")
                  .concat(props.currentMovie.release_date.substring(0, 4))
                  .join("/")}
              </em>
            </p>

            <p>
              <em>{props.currentMovie.overview}</em>
            </p>

            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend"></Typography>
              <Rating
                name="customized-10"
                defaultValue={props.currentMovie.vote_average}
                readOnly
                max={10}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
