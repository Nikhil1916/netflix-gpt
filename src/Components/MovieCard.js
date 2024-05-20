import React from 'react'
import { IMG_CDN_URL } from '../Utils/constants'

const MovieCard = ({movieInfo}) => {
  if(!movieInfo?.poster_path) return;
  return (
    <div className='w-48 h-80 cursor-pointer'>
        <img src={IMG_CDN_URL + movieInfo?.poster_path} />
    </div>
  )
}

export default MovieCard