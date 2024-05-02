import React, { useEffect } from 'react'
import Header from './Header'
import { options } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/movieSlice';

const Browse = () => {
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
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse