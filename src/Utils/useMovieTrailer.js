import { useDispatch } from "react-redux";
import { options } from "./constants";
import { addTrailer } from "./movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async() => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
      const json = await data?.json();
      let trailer = json?.results?.find(video=>video?.type?.toLowerCase()==='trailer');
      if(!trailer) {
        trailer = json?.results?.[0];
      }
      dispatch(addTrailer(trailer))
    }
    useEffect(()=>{
      getMovieVideos();
    },[]);//eslint-disable-line react-hooks/exhaustive-deps
}

export default useMovieTrailer