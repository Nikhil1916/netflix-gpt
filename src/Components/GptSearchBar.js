import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[15%]'>
        <form className='bg-black w-[50%] mx-auto p-20 rounded-lg'>
            <input type="text" placeholder='What Would You want to watch today?' className='w-[100%] p-2 rounded m-2' />
            <div className='flex justify-center'>
            <button className='py-2 px-4 bg-color bg-gray-500 text-white rounded-lg w-[50%] text-center'>Search</button>
            </div>
        </form>
    </div>
  )
}

export default GptSearchBar