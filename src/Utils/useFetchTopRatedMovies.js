import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "./movieSlice";
import { options } from "./constants";

const useFetchTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async(page=1) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${page}`, options);
        const json = await data?.json();
        // console.log(json);
        dispatch(addTopRatedMovies(json?.results));
      }
      useEffect(()=>{
        getTopRatedMovies();
      },[])
}

export default useFetchTopRatedMovies;