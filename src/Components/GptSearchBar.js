import React, { useRef } from 'react'
import lang from '../Utils/languageConstants.js';
import { useSelector } from 'react-redux';
import { openai } from '../Utils/openAi.js';

const GptSearchBar = () => {
  const languageType = useSelector((app)=>app.config.languageType) || 'en';
  const searchText = useRef(null);
  const handleGptSearch = async() => {
    console.log(searchText.current.value);
    // make an api call to get movie results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices);
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