import React from "react";

const Movie = props => {
  return (
    <div className="container">
      <div className="col s12 m6 l3 ">
        <div className="card">
          <div className="card-image waves-effects waves-blocked waves-light">
            {props.image == null ? (
              <img
                src={`https://11luuvtufne6f2y33i1nvedi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/no-image-icon.png`}
                alt="card image"
                style={{ width: "100%", height: 360 }}
              />
            ) : (
              <img
                src={`http://image.tmdb.org/t/p/w185${props.image}`}
                alt="card image"
                style={{ width: "100%", height: 360 }}
              />
            )}
          </div>
          <div className="card-content">
            <p>
              <a href="#"> View Detail </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movie;
//https://11luuvtufne6f2y33i1nvedi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/no-image-icon.png
