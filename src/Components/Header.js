import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { addUser, removeUser } from "../Utils/userSlice";
import { netflixLogo, userIcon } from "../Utils/constants";
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store)=>store.user);
    const [isDropdownOpen, setIsDropDown] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
          const {uid, displayName, email} = user;
          dispatch(addUser({uid,email,displayName}));
          navigate("/browse");
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/");
        }
      });
      return () => {
        //unsubscribe when component unmount
        unsubscribe();
      }
    },[]);
    const handleSignOut = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            // navigate("/");
          })
          .catch((error) => {
            // An error happened.
            // navigate("/error");
          });
          
    }

    const toggleDropdown = () => {
      setIsDropDown(!isDropdownOpen);
    }
    return (
      <div className="header absolute w-full h-24 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <img
          src={netflixLogo}
          alt="logo"
          className="h-24"
        />
        {user && (
          <div
            className="flex items-center p-2 gap-2 justify-center cursor-pointer"
            onMouseLeave={toggleDropdown}
          >
            <img
              src={userIcon}
              className="w-12 h-12"
              alt="user-icon"
            />
            {!isDropdownOpen ? (
              <FontAwesomeIcon
                icon={faAngleDown}
                className="text-white"
                onMouseEnter={toggleDropdown}
              />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} className="text-white" />
            )}

            {isDropdownOpen && (
              <div className="absolute top-20 mr-10 bg-black p-3 w-30">
              <div>
                <button
                  className="font-bold text-white"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
              
              </div>
            )}
          </div>
        )}
      </div>
    );
}

export default Header;