import React, { useEffect } from 'react'
import Header from './Header'
import useFetchNowPlayingMovies from "../Utils/useFetchNowPlayingMovies"

const Browse = () => {
  
  useFetchNowPlayingMovies();
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse