import React from "react";
//functional component
//just to test commit here
const search = (props) => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s4 offser-s4">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                type="text"
                placeholder="Search Movie"
                onChange={props.handleChange}
              />
            </div>
            <div style={{ float: "left" }}>
              <button className="waves-effect waves-light btn">Search</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default search;
