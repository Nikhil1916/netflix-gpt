import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../Utils/userSlice';
const Body = () => {
  const dispatch = useDispatch();
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
  // console.log(auth);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const {uid, displayName, email} = user;
        dispatch(addUser({uid,email,displayName}));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  },[]);


  return (
    <div className='body'>
      <RouterProvider router={router} />
    </div>
  )
}

export default Body