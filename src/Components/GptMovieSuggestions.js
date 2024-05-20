import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  //would have been better to create gpt slice
  const gptMovies = useSelector(store=>store.movies);
  const {gptSearchMovieSuggestions,gptMovieName} = gptMovies;
  console.log(gptSearchMovieSuggestions,gptMovieName);
  if(!gptMovieName || gptSearchMovieSuggestions?.length ==0 || !gptSearchMovieSuggestions) return;
  return (
    // <div className='flex justify-center mt-2'>
    <div className='p-4 bg-opacity-70 text-white mt-2'>
        {
          gptMovieName?.map((movie,i)=> gptSearchMovieSuggestions?.[i]?.length ? <MovieList key={movie} title={movie} movies={gptSearchMovieSuggestions?.[i]} /> : null)
        }
    </div>

    // </div>
  )
}

export default GptMovieSuggestions