import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const usePopular = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=> store.movies.popularMovies);
    const getPopularMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopular(json.results));
    }
    useEffect(()=>{
       !popularMovies && getPopularMovies();
    },[])
}
export default usePopular;  