import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css"
import { Link } from "react-router-dom";
const MovieList  = ({title, movies}) => {
  console.log(movies);
    return (
    <div>
      <div className="w-screen py-6 px-6 text-white">
        <h1 className="text-3xl font-bold pb-6">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex gap-10">
            {movies?.map((_) => {
              return <Link key={_?.id} to={`watch?=${_?.id}`}> <MovieCard key={_?.id} movieInfo={_} /></Link>;
            })}
          </div>
        </div>
      </div>
      </div>
    );
}

export default MovieList;