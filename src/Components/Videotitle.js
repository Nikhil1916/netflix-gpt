import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Videotitle = ({title, overview}) => {
  return (
    <div className='bg-blue-400'>
    <div className="pt-36 px-6 ml-4">
      <h1 className='text-5xl font-bold mb-4'>{title}</h1>
      <p className='text-large w-[50%]'>{overview}</p>
    </div>
      <div className='ml-4 mt-4 mb-8 px-6'>
        <button className='px-12 py-4 text-xl bg-gray-500 mr-4 bg-opacity-50 rounded-md'><FontAwesomeIcon icon={faPlay} className='pr-2' />Play</button>
        <button className='px-12 py-4 text-xl bg-gray-500 mr-4 bg-opacity-50 rounded-md'>More Info.</button>
      </div>
      </div>
  )
}

export default Videotitle