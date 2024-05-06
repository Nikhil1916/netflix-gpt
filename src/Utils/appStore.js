import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import loaderReducer from "./loaderSlice"
const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        loader: loaderReducer
    }
});
export default appStore;