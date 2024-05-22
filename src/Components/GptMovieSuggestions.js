import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  //would have been better to create gpt slice
  const gptMovies = useSelector(store=>store.movies);
  const {gptSearchMovieSuggestions,gptMovieName} = gptMovies;
  return (
    // <div className='flex justify-center mt-2'>
    <div className='p-4 bg-opacity-70 text-white mt-2'>
        {
          gptMovieName?.length > 0 ? gptMovieName?.map((movie,i)=> gptSearchMovieSuggestions?.[i]?.length ? <MovieList key={movie} title={movie} movies={gptSearchMovieSuggestions?.[i]} /> : null) : gptMovieName?.length===0 && [1,2,3,4]?.map((i)=><MovieList key={i} movies={[]} title={"Loading...."} />)
        }
    </div>

    // </div>
  )
}

export default GptMovieSuggestions