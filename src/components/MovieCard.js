import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  console.log(posterPath);
  return (
    <div className='w-[25vw] sm:w-36 lg:w-48 pr-4'>
        {posterPath===null ? <img alt='Movie Poster' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jf-rs2bvaM5kMaPlE7Ry2hphIQW-A0fFyA&s' />:<img alt='Movie Card' src={IMG_CDN + posterPath}/>}
    </div>
  )
}

export default MovieCard