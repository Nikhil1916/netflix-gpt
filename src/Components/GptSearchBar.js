import React, { useRef } from 'react'
import lang from '../Utils/languageConstants.js';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { googleAPIKEY } from '../Utils/constants.js';
import { fetchMovie } from '../Utils/functions.js';
import { addGPTSuggestions } from '../Utils/movieSlice.js';
import { gptRsult } from '../Utils/gptResultDemo.js';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const genAI = new GoogleGenerativeAI(googleAPIKEY);
  const languageType = useSelector((app)=>app.config.languageType) || 'en';
  const searchText = useRef(null);
  const handleGptSearch = async() => {
    if(!searchText.current.value) return;
    dispatch(addGPTSuggestions({
      movieResults: [],
      movieNames: []
    }));
    try {
    // make an api call to get movie results
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    //adding this details so we get proper results
    const prompt = "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". Only give me names of 5 Movies , comma seperated like the example result given ahead. Example Result: Tarot, Harry potter, Conjuring, Golmaal returns";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const movies = text.split(",");
    const moviePromises = movies?.map((movie)=>fetchMovie(1,movie));
    const moviesRes = await Promise.all(moviePromises) ;
    const moviesResults = gptRsult;
    dispatch(addGPTSuggestions({
      movieResults:moviesRes ? moviesRes?.map(m=>m.results) : moviesResults?.map(m=>m.results),
      movieNames: movies? movies : ['andaz apna apna', 'hera pheri','chori chori chupke chupke', 'hungama']
    }));
    } catch(e) {
      //adding if key expires so flow shouldnt break
      const moviesResults = gptRsult;
      dispatch(addGPTSuggestions({
        movieResults:moviesResults?.map(m=>m.results),
        movieNames: ['andaz apna apna', 'hera pheri','chori chori chupke chupke', 'hungama']
      }));
      console.warn(e);
    }
    
  }
  return (
    <div className="flex justify-center sm: pt-[15rem] md:pt-[10%]">
      <form className=" sm: w-[80%] md:w-1/2 rounded flex bg-black sm: flex-col md:flex-row" onSubmit={(e)=>e.preventDefault()}>
          <input
            type="text"
            placeholder={lang?.[languageType]?.placeholder}
            className="p-4 w-[65%] rounded m-4 sm: w-[90%]"
            ref={searchText}
          />
          <button className="py-2 px-4 m-4 bg-red-500 text-white text-center rounded  w-[50%] md:w-[25%] sm: ml-16 md:ml-0" onClick={handleGptSearch}>
            {lang?.[languageType]?.search}
          </button>
      </form>
    </div>
  );
}

export default GptSearchBar