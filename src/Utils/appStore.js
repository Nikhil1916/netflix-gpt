import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import loaderReducer from "./loaderSlice"
import configReducer from "./configSlice";
const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        loader: loaderReducer,
        config: configReducer
    }
});
export default appStore;