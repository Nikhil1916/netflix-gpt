import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "./movieSlice";
import { options } from "./constants";

const useFetchTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store=>store.movies.topRatedMovies);
    const getTopRatedMovies = async(page=1) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${page}`, options);
        const json = await data?.json();
        dispatch(addTopRatedMovies(json?.results));
      }
      useEffect(()=>{
        !topRatedMovies && getTopRatedMovies();
      },[])
}

export default useFetchTopRatedMovies;