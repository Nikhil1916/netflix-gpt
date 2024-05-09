import React from 'react'
import lang from '../Utils/languageConstants.js';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const languageType = useSelector((app)=>app.config.languageType) || 'en';
  console.log(languageType);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 rounded flex bg-black">
          <input
            type="text"
            placeholder={lang?.[languageType]?.placeholder}
            className="p-4 w-[65%] rounded m-4"
          />
          <button className="py-2 px-4 m-4 bg-red-500 text-white text-center w-[25%] rounded">
            {lang?.[languageType]?.search}
          </button>
      </form>
    </div>
  );
}

export default GptSearchBar