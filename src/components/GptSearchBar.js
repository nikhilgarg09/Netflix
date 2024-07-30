import React, { useRef } from 'react'
import { genAI } from '../utils/gemini';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/gptSlice';
const GptSearchBar = () => {
    const searchtext = useRef(null);
    const dispatch = useDispatch();
    const searchMovieTmdb = async(movieName)=>{
        const movie = await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await movie.json();
        return json.results;
    }
    const handleGptSearchclick = async()=>{
        const searchMovie = "Act as a Movie Recommendation system and suggest some movies for the query  : "+searchtext.current.value+". only give me names of 5 movies, comma separated like the example result given ahead. Example Result : Gadar, Sholay, Don, Koi Mil Gaya , Golmaal . Don't return any other text. if you don't find any results just return 5 random movies";
        const model = genAI?.getGenerativeModel({ model: "gemini-1.5-flash"});
        const result = await model?.generateContent(searchMovie);
        const data = result?.response?.candidates[0]?.content?.parts[0]?.text;
        const gptMovies = data?.split(",");
        const movies = gptMovies?.map((movie)=>searchMovieTmdb(movie));
        if(movies==null){
            return null;
        }
        const tmdbResults = await Promise.all(movies);
        dispatch(addGptMovieResult({movieNames : gptMovies,movieResults : tmdbResults}));
    };
  return (
    <div className='pt-[20%] md:pt-[10%] flex justify-center'>
        <form className='w-11/12 md:w-3/4 bg-black grid grid-cols-12 bg-opacity-75 rounded-md' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchtext} className='col-span-8 p-2 md:p-4 m-5 md:m-4 md:col-span-10 rounded-lg' type='text' placeholder='Search Movie?'/>
            <button onClick={handleGptSearchclick} className='col-span-4 m-5 md:col-span-2 md:m-4 md:py-2 md:px-2 bg-[#b82929] text-white rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar