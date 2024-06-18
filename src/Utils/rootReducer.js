// app/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import loaderReducer from "./loaderSlice"
import configReducer, { resetState } from "./configSlice";
const appReducer = combineReducers({
    user: userReducer,
    config: configReducer,
    movies: moviesReducer,
    loader: loaderReducer,
});

const rootReducer = (state, action) => {
  if (action.type === resetState.type) {
    // console.log("Happening");
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
