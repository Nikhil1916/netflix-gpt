import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
import lang from '../Utils/languageConstants';

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  const languageType = useSelector(store=>store.config.languageType) || 'en';
  console.log(movies);
  return (
    <div className="bg-black sm:pt-[80%] md:pt-0">
      <div className="-mt-24 z-20 relative">
        <MovieList title={lang?.[languageType]?.now_playing} movies={movies?.nowPlayingMovies} />
        <MovieList title={lang?.[languageType]?.popular} movies={movies?.popularMovies} />
        <MovieList title={lang?.[languageType]?.upcoming} movies={movies?.upcomingMovies} />
        <MovieList title={lang?.[languageType]?.top_rated} movies={movies?.topRatedMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer