import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToprated } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useToprated = ()=>{
    const dispatch = useDispatch();
    const topratedMovies = useSelector(store=> store.movies.topratedMovies);
    const getTopratedMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addToprated(json.results));
    }
    useEffect(()=>{
       !topratedMovies && getTopratedMovies();
    },[])
}
export default useToprated;  