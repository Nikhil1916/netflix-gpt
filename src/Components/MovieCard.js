import React from 'react'
import { IMG_CDN_URL } from '../Utils/constants'

const MovieCard = ({movieInfo}) => {
  return (
    <div className='w-48 h-80'>
        <img src={IMG_CDN_URL + movieInfo?.poster_path} />
    </div>
  )
}

export default MovieCard