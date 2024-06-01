import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../Utils/languageConstants';
const Videotitle = ({title, overview}) => {
  const languageType = useSelector((store)=>store.config.languageType);
  return (
    <div className='w-screen aspect-video absolute z-10 text-white bg-gradient-to-r from-black hidden md:block'>
    <div className="pt-[15%] px-12 ml-4 w-[40%]">
      <h1 className='text-5xl font-bold mb-4'>{title}</h1>
      <p className='text-large'>{overview}</p>
    </div>
      <div className='ml-4 mt-4 mb-8 px-12'>
        <button className='px-12 py-4 text-xl bg-white mr-4 rounded-md text-black hover:bg-opacity-80'><FontAwesomeIcon icon={faPlay} className='pr-2' />{lang[languageType].play}</button>
        <button className='px-12 py-4 text-xl bg-gray-500 mr-4 bg-opacity-50 rounded-md'><FontAwesomeIcon icon={faCircleInfo}  className='pr-2' />{lang[languageType].more_info}</button>
      </div>
      </div>
  )
}

export default Videotitle