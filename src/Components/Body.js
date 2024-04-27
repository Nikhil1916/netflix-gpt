import React from 'react'
import Login from './Login'
import Browse from './Browse'
import Header from "./Header"
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom'
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
  ])
  return (
    <div className='body'>
        {/* <Header/> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default Body