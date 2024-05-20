import React , {useState} from 'react'
import Header from './Header'
import useFetchNowPlayingMovies from "../Utils/useFetchNowPlayingMovies"
import usePopularMovies from '../Utils/usePopularMovies'
import useFetchUpcomingMovies from '../Utils/useFetchUpcomingMovies'
import useFetchTopRatedMovies from '../Utils/useFetchTopRatedMovies'
import GptSearch from './GptSearch'
import { Outlet } from 'react-router-dom'

const Browse = () => {
  useFetchNowPlayingMovies();
  usePopularMovies();
  useFetchUpcomingMovies();
  useFetchTopRatedMovies();
  const [isGptSearch , setIsGptSearch] = useState(false);
  return (
    <div>
    <h1 className='text-3xl'>{isGptSearch}</h1>
      <Header setGptSearch={(val) => { setIsGptSearch(val) }} isGptSearch={isGptSearch} />
      {
        isGptSearch ? <GptSearch /> :
         <>
          <Outlet/>
          </>
      }
    </div>
  )
}

export default Browse