import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerKey } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerkey = (movieId)=>{
    const dispatch = useDispatch();
    const getMovieVideo = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS);
        const json = await data.json();
        const filterdata = json.results.filter(video => video.type==="Trailer");
        const trailer = filterdata.length ? filterdata[0] : json.results[0];
        dispatch(addTrailerKey(trailer.key));
    }
    useEffect(()=>{
        getMovieVideo();
    },[])
}
export default useTrailerkey;