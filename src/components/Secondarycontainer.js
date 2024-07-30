import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
const Secondarycontainer = () => {
  const movies = useSelector(store => store.movies);
  return (movies && (
    <div className=' bg-black'>
      <div className='mt-[-35vw] pl-2 md:-mt-60 sm:-mt-48 lg:-mt-80 z-30 md:pl-4 relative text-white lg:pl-7'>
      <MovieList title={"Now Playing"} movies={movies.nowplayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topratedMovies}/>
      </div>
    </div>
  ))
}

export default Secondarycontainer