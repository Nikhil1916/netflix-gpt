import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle';
import VideoBackground from './VideoBackground';
import "./Schimmer.css"

const MainContainer = (props) => {
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
  if(movies == null || movies?.length == 0) {
    return (
      <div className='pt-[40%] bg-black md:h-80 w-full'></div>
    )
  };
  const defaultMovie = movies[0];
  if(movies == null) return;
  const {original_title , overview , id } = defaultMovie;
  return (
    <div className='sm: pt-[40%] bg-black md:pt-0'>
      <Videotitle  title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer