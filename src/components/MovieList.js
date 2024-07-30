import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
  return (
    <div className='p-4 sm:p-7 mt-4'>
        <h1 className='text-lg md:text-3xl sm:text-xl font-bold sm:py-3 py-1'>{title}</h1>
        <div className='flex overflow-x-scroll '>
            <div className='flex'>
              {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList