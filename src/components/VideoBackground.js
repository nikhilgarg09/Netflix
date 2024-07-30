import React from 'react'
import useTrailerkey from '../hooks/useTrailerkey';
import { useSelector } from 'react-redux';
const VideoBackground = ({movieId}) => {
  useTrailerkey(movieId);
  const TrailerKey = useSelector(store=> store.movies.trailerKey);
  return (
    <div className='translate-y-[-40px] sm:translate-y-[-60px] md:translate-y-[-100px]'>
        <iframe className='w-screen aspect-video overflow-x-hidden' src={"https://www.youtube.com/embed/"+TrailerKey+"?&autoplay=1&mute=1&loop=1&playlist="+TrailerKey} title="YouTube video player"></iframe>
    </div>
  )
}

export default VideoBackground