import React from "react";
import Header from "./Header";
import useFetchNowPlayingMovies from "../Utils/useFetchNowPlayingMovies";
import usePopularMovies from "../Utils/usePopularMovies";
import useFetchUpcomingMovies from "../Utils/useFetchUpcomingMovies";
import useFetchTopRatedMovies from "../Utils/useFetchTopRatedMovies";
import GptSearch from "./GptSearch";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  useFetchNowPlayingMovies();
  usePopularMovies();
  useFetchUpcomingMovies();
  useFetchTopRatedMovies();
  const isGptPage = useSelector((store) => store.config.isGptPage);
  return (
    <div>
      <Header />
      {isGptPage ? (
        <GptSearch />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Browse;
