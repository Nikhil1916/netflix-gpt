import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "./movieSlice";
import { options } from "./constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async(page=1) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}`, options);
        const json = await data?.json();
        // console.log(json);
        dispatch(addPopularMovies(json?.results));
      }
      useEffect(()=>{
        getPopularMovies();
      },[])
}

export default usePopularMovies;