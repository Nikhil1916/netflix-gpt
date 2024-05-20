import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
import lang from '../Utils/languageConstants';

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  // console.log(movies);/
  const languageType = useSelector(store=>store.config.languageType) || 'en';
  return (
    <div className="bg-black">
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