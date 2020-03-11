import React from "react";
import Movie from "./Movie";

const movieList = props => {
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col s12">
          {props.movies.map((movie, i) => {
            return <Movie key={i} image={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default movieList;