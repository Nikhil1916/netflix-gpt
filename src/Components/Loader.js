import React from 'react';

const Loader = () => {
  return (
    <div className='bg-blue-500 z-50 w-[100rem]'>
      {true ? <p>Loading...</p> : null}
    </div>
  );
}

export default Loader;