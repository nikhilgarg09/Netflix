import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { loginbgimage_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='h-full object-contain fixed -z-10'>
            <img className="h-screen object-cover md:w-screen" src={loginbgimage_URL} alt=''/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch