import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css"
const MovieList  = ({title, movies}) => {
    return (
    <div>
      <div className="w-[100vw] py-6 px-6 text-white">
        <h1 className="text-3xl font-bold pb-6">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex gap-10">
            {movies?.map((_) => {
              return <MovieCard key={_?.id} movieInfo={_} />;
            })}
          </div>
        </div>
      </div>
      </div>
    );
}

export default MovieList;