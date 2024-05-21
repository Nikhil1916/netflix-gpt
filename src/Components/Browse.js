import React , {useState} from 'react'
import Header from './Header'
import useFetchNowPlayingMovies from "../Utils/useFetchNowPlayingMovies"
import usePopularMovies from '../Utils/usePopularMovies'
import useFetchUpcomingMovies from '../Utils/useFetchUpcomingMovies'
import useFetchTopRatedMovies from '../Utils/useFetchTopRatedMovies'
import GptSearch from './GptSearch'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Browse = () => {
  useFetchNowPlayingMovies();
  usePopularMovies();
  useFetchUpcomingMovies();
  useFetchTopRatedMovies();
  const isGptPage = useSelector(store=>store.config.isGptPage);
  return (
    <div>
    {/* <h1 className='text-3xl'>{isGptPage}</h1> */}
      <Header />
      {
        isGptPage ? <GptSearch /> :
         <>
          <Outlet/>
          </>
      }
    </div>
  )
}

export default Browse