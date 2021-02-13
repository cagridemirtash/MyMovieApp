import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./component/Movie";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieDetail from "./component/MovieDetail";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
const MovieGetApi =
  "https://api.themoviedb.org/3/discover/movie?api_key=618e210b5640fc9cddd7b03a2df507ed&language=en-US&adult=false&sort_by=popularity.desc&page=46";

function App() {
  const [allMovies, setAllMovies] = useState([]);

  const movies = allMovies.map((all, index) => <Movie {...all} key={index} />);
  const moviesDetail = allMovies.map((detail, index) => (
    <MovieDetail {...detail} key={index} />
  ));
  useEffect(() => getMovie(MovieGetApi), []);
  const getMovie = (Api) =>
    fetch(Api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllMovies(data.results);
      });

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movie">
          <div className="container">
            <div className="row">{movies}</div>
          </div>
        </Route>
        <Route path="/movie/:id">{moviesDetail}</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
