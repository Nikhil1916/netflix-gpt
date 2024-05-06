import React from 'react'
import Login from './Login'
import Browse from './Browse'
import Loader from './Loader'
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';
const Body = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ]);
  return (
    <div className='body'>
      {/* <Loader/> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default Body