import { useDispatch } from "react-redux";
import { options } from "./constants";
import { addUpcomingMovies } from "./movieSlice";
import { useEffect } from "react";

const useFetchUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async(page=1) => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?page=${page}`, options);
      const json = await data?.json();
      // console.log(json);
      dispatch(addUpcomingMovies(json?.results));
    }
    useEffect(()=>{
        getUpcomingMovies();
    },[])
}

export default useFetchUpcomingMovies;