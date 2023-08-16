import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieDetailsPage from "./MovieDetails";
import Content from "../Contents/Content";
import Intro from "../Intro/Intro";
import Menus from "../Menus/Menus";

function Home(props) {
  const { MovieDetails } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);

  useEffect(() => {
    setIsShowMovieDetails(MovieDetails ? true : false);
  }, [MovieDetails]);

  return (
    <div>
      <Intro />
      <Content />
      {/* <MovieDetailsPage/> */}
      <MovieDetailsPage showModal={isShowMovieDetails} movie={MovieDetails} />
      <Menus />
      {/* <MovieDetailsPage showModal={MovieDetails ? true: false} movie={MovieDetails} /> */}
    </div>
  );
}

export default Home;
