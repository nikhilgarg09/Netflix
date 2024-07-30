import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const Maincontainer = () => {
    const movies = useSelector(store=>store.movies?.nowplayingMovies);
    if(movies===null){
        return ; 
    }
    const mainMovie = movies[0];
    const {original_title,overview,id} = mainMovie;
  return (
    <div className='overflow-x-hidden'>
        <VideoTitle title = {original_title} overview = {overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default Maincontainer