import { useDispatch } from "react-redux";
import { options } from "./constants";
import { addNowPlayingMovies } from "./movieSlice";
import { useEffect } from "react";

const useFetchNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async(page=1) => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${page}`, options);
      const json = await data?.json();
      // console.log(json);
      dispatch(addNowPlayingMovies(json?.results));
    }
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
}

export default useFetchNowPlayingMovies;