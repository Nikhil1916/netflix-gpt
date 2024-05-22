import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "./movieSlice";
import { options } from "./constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movies.popularMovies);
    const getPopularMovies = async(page=1) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}`, options);
        const json = await data?.json();
        dispatch(addPopularMovies(json?.results));
      }
      useEffect(()=>{
        popularMovies?.length==0 && getPopularMovies();
      },[]);//eslint-disable-line react-hooks/exhaustive-deps
}

export default usePopularMovies;