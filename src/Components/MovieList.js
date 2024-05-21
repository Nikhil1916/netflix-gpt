import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleGptPage } from "../Utils/configSlice";
import SchimmerCard from "./SchimmerCard";
const MovieList  = ({title, movies}) => {
    const dispatch = useDispatch();
    return (
    <div>
      <div className="w-screen py-6 px-6 text-white">
        <h1 className="sm:text-2xl md:text-3xl font-bold pb-6">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex gap-10">
            {movies?.length !== 0 ? (movies?.map((_) => {
              return <Link key={_?.id} to={`watch?v=${_?.id}&name=${_?.original_title}`} onClick={()=>{
                  dispatch(toggleGptPage(false));
              }}> <MovieCard key={_?.id} movieInfo={_} /></Link>;
            })) : <SchimmerCard/>}
          </div>
        </div>
      </div>
      </div>
    );
}

export default MovieList;