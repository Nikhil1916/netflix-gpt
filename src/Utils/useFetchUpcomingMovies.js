import { useDispatch, useSelector } from "react-redux";
import { options } from "./constants";
import { addUpcomingMovies } from "./movieSlice";
import { useEffect } from "react";

const useFetchUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store=>store.movies.upcomingMovies);
    const getUpcomingMovies = async(page=1) => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?page=${page}`, options);
      const json = await data?.json();
      dispatch(addUpcomingMovies(json?.results));
    }
    useEffect(()=>{
        upcomingMovies?.length == 0 && getUpcomingMovies();
    },[])//eslint-disable-line react-hooks/exhaustive-deps
}

export default useFetchUpcomingMovies;