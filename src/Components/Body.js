import React from 'react'
import Login from './Login'
import Browse from './Browse'
import MovieDetail from './MovieDetail'
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';
import Dashboard from './Dashboard'
const Body = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>,
      children: [
        {
          path:"watch",
          element:<MovieDetail/>
        },
        {
          path:"",
          element:<Dashboard/>,
        }
      ]
    },
  ]);
  return (
    <div className='body'>
      {/* <Loader/> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default Body