import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle';
import VideoBackground from './VideoBackground';

const MainContainer = (props) => {
  // console.log(1, props);
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
  if(movies == null) return;
  const defaultMovie = movies[0];
  // console.log(defaultMovie);
  if(movies == null) return;
  const {original_title , overview , id } = defaultMovie;
  return (
    <div>
      <Videotitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer