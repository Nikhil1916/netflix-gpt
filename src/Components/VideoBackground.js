import React from 'react'
import { youtubeVideoUrl } from '../Utils/constants'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Utils/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store)=>store.movies.trailerVideo);
  return (
    <div><iframe src={youtubeVideoUrl+trailer?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe></div>
  )
}

export default VideoBackground