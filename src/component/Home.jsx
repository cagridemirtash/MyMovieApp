import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="row text-center">
          <h1>Welcome my movie app</h1>
          <Link to="/movie">
            <button className="btn btn-danger">Lets goooooo</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
