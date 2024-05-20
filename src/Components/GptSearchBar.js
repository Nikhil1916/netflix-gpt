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
    console.log(searchText.current.value);
    if(!searchText.current.value) return;
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
    console.log(moviesRes);
    dispatch(addGPTSuggestions({
      movieResults:moviesRes ? moviesRes?.map(m=>m.results) : moviesResults?.map(m=>m.results),
      movieNames: movies? movies : ['andaz apna apna', 'hera pheri','chori chori chupke chupke', 'hungama']
    }));
    } catch(e) {
      console.error(e);
    }
    
  }
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 rounded flex bg-black" onSubmit={(e)=>e.preventDefault()}>
          <input
            type="text"
            placeholder={lang?.[languageType]?.placeholder}
            className="p-4 w-[65%] rounded m-4"
            ref={searchText}
          />
          <button className="py-2 px-4 m-4 bg-red-500 text-white text-center w-[25%] rounded" onClick={handleGptSearch}>
            {lang?.[languageType]?.search}
          </button>
      </form>
    </div>
  );
}

export default GptSearchBar