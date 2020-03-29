import React from "react";
//functional component
//just to test commit
const search = props => {
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
          </form>
        </section>
      </div>
    </div>
  );
};

export default search;
