import React from 'react'
import Header from './Header'
import useFetchNowPlayingMovies from "../Utils/useFetchNowPlayingMovies"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  
  useFetchNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer>
        <p>Hello I am from parent</p>
      </MainContainer>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse