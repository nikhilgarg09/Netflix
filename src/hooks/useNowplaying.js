import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowplayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useNowplaying = ()=>{
    const dispatch = useDispatch();
    const nowplayingMovies = useSelector(store=> store.movies.nowplayingMovies);
    const getNowplayingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowplayingMovies(json.results));
    }
    useEffect(()=>{
        
       !nowplayingMovies && getNowplayingMovies();
    },[])
}
export default useNowplaying;  