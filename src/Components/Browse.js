import React from 'react'
import Header from './Header'
import useFetchNowPlayingMovies from "../Utils/useFetchNowPlayingMovies"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Utils/usePopularMovies'
import useFetchUpcomingMovies from '../Utils/useFetchUpcomingMovies'
import useFetchTopRatedMovies from '../Utils/useFetchTopRatedMovies'

const Browse = () => {
  useFetchNowPlayingMovies();
  usePopularMovies();
  useFetchUpcomingMovies();
  useFetchTopRatedMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse