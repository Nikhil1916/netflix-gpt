import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BG_URL, options } from "../Utils/constants";

const MovieDetail = () => {
  useEffect(()=>{
    fetchMovieDetail();
  },[]);
  const fetchMovieDetail = async()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${searchParam.get("v")}/videos`, options);
    const json = await data?.json();
    if(json?.results?.find((movie)=>movie?.type?.toLowerCase() == "trailer")) {
      setMovie(json?.results?.find((movie)=>movie?.type?.toLowerCase() == "trailer"));
    } else {
      setMovie({
        noMovieFound:true
      })
    }

  }
  const [movie, setMovie] = useState(null);
  const [searchParam] = useSearchParams();
  if(!searchParam.get("v") || !movie) return;
  if(movie?.noMovieFound) {
    return <>
      <div className="fixed">
        <img src={BG_URL}
         alt="login-bg" className="login-bg w-screen h-screen" />
        </div>
        <h1 className="text-3xl text-white absolute m-24 ml-12 font-bold">404, No Trailer Found!!</h1>
    </>
  }
  return (
    <div className="relative">
     <div className="fixed">
        <img src={BG_URL}
         alt="login-bg" className="login-bg w-screen h-screen" />
        </div>
      <div className="bg-black absolute mt-24 ml-20">
            <div>
              <iframe
              className="aspect-video"
                width="800"
                height="400"
                src={
                  "https://www.youtube.com/embed/" +
                  movie?.key +
                  "?loop=1&mute=1"
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
      </div>
      <h1 className="text-white absolute top-[32rem] left-[5rem] text-3xl font-bold">{searchParam.get("name")}</h1>
    </div>
  );
};

export default MovieDetail;
