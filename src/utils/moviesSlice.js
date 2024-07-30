import { createSlice } from "@reduxjs/toolkit";

const moviesslice = createSlice({
    name : "movies",
    initialState:{
        nowplayingMovies : null,
        trailerKey : null,
        popularMovies:null,
        topratedMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowplayingMovies : (state,action)=>{
            state.nowplayingMovies=action.payload;
        },
        addTrailerKey : (state,action)=>{
            state.trailerKey=action.payload;
        },
        addPopular :(state,action)=>{
             state.popularMovies=action.payload;
        },
        addToprated:(state,action)=>{
             state.topratedMovies=action.payload;
        },
        addUpcoming:(state,action)=>{
             state.upcomingMovies=action.payload;
        },
    },
});
export const {addNowplayingMovies,addTrailerKey,addPopular,addToprated,addUpcoming} = moviesslice.actions;
export default moviesslice.reducer;