import React from "react";
import { Link } from "react-router-dom";

function ShowMovie(props) {
  const { title, poster_path, id } = props;
  const SourceImg = `https://image.tmdb.org/t/p/w1280${poster_path}`;
  return (
    <>
      <div className="d-flex justify-content-center col-lg-3 col-md-4 col-sm-12 text-center ">
        <div className="card mt-2">
          <img
            src={SourceImg}
            className="card-img-top"
            width="200"
            height="200"
            alt={title}
          />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p className="card-text">{title}</p>
          </div>
          <Link to={`/movie/:${id}`}>
            <button className="btn btn-danger">Go to Detail</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShowMovie;
