import { useDispatch, useSelector } from "react-redux";
import { options } from "./constants";
import { addNowPlayingMovies } from "./movieSlice";
import { useEffect } from "react";

const useFetchNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);
    const getNowPlayingMovies = async(page=1) => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${page}`, options);
      const json = await data?.json();
      dispatch(addNowPlayingMovies(json?.results));
    }
    useEffect(()=>{
      !nowPlayingMovies && getNowPlayingMovies();
    },[])
}

export default useFetchNowPlayingMovies;