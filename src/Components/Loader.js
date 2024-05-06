import React from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {
  const isLoading = useSelector((store)=>store.loader);
  // console.log(isLoading);
  return (
    <div className='bg-blue-500 z-50 w-[100rem]'>
      {true ? <p>Loading...</p> : null}
    </div>
  );
}

export default Loader;