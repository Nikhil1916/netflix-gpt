import React from 'react'
import { youtubeVideoUrl } from '../Utils/constants'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Utils/useMovieTrailer';
import Loader from './Loader';

const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store)=>store.movies.trailerVideo);
  return (
    <div>
    { trailer ? <div className="w-screen"><iframe className='w-screen aspect-video' src={youtubeVideoUrl+trailer?.key+"?&autoplay=1&mute=1&loop=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe></div> : <Loader/>}
    </div>
  )
}

export default VideoBackground