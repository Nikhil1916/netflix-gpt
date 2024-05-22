import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: [],
        trailerVideo: null,
        popularMovies: [],
        upcomingMovies: [],
        topRatedMovies: [],
        gptSearchMovieSuggestions: null,
        gptMovieName: null
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailer:(state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies:(state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies:(state, action)=> {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies:(state, action)=> {
            state.topRatedMovies = action.payload;
        },
        addGPTSuggestions:(state, action) => {
            state.gptSearchMovieSuggestions = action.payload.movieResults;
            state.gptMovieName = action.payload.movieNames
        }
    }
})

export default movieSlice.reducer;
export const {addNowPlayingMovies, addTrailer, addPopularMovies , addUpcomingMovies, addTopRatedMovies, addGPTSuggestions} = movieSlice.actions;