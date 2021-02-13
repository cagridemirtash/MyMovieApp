import React from "react";
import { useParams } from "react-router-dom";

function MovieDetail(props) {
  const params = useParams();
  let { title, overview, id, poster_path } = props;
  const SourceImg = `https://image.tmdb.org/t/p/w1280${poster_path}`;
  console.log(params.id);
  id = ":" + id;
  return (
    <div>
      {params.id === id ? (
        <div>
          <div className="container ">
            <div className="row d-flex justify-content-center text-center text-light">
              <h1>{title}</h1>
              <h2>{overview}</h2>
              <img src={SourceImg} width="900" height="900" alt={title} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MovieDetail;
