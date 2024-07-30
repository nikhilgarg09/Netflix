import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowplayingMovies, addUpcoming } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useUpcoming = ()=>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store=> store.movies.upcomingMovies);
    const getUpcomingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcoming(json.results));
    }
    useEffect(()=>{
       !upcomingMovies && getUpcomingMovies();
    },[])
}
export default useUpcoming;  