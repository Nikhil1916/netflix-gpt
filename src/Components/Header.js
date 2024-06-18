import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Utils/firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { addUser, removeUser } from "../Utils/userSlice";
import { netflixLogo, userIcon, supportedLanguages } from "../Utils/constants";
import { handleSignOut } from "../Utils/functions";
import { toggleGptPage, updateLanguage,resetState } from "../Utils/configSlice";
import lang from "../Utils/languageConstants";
const Header = () => {
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if(path?.pathname === "/") {
          navigate("/browse");
        }
        const {uid, displayName, email} = user;
        dispatch(addUser({uid,email,displayName}));

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
  },[]); //eslint-disable-line react-hooks/exhaustive-deps
    const isGptSearch = useSelector(store=>store.config.isGptPage);
    const navigate = useNavigate();
    const user = useSelector((store)=>store.user);
    const config = useSelector((store)=>store.config);
    const [isDropdownOpen, setIsDropDown] = useState(false);
    const dispatch = useDispatch();
    const path = useLocation();
    const languageType = useSelector((store)=>store.config.languageType) || 'en';
    const toggleGptSearch = () => {
      dispatch(toggleGptPage(!isGptSearch));
    }

    const toggleDropdown = (val) => {
      setIsDropDown(val);
    }
    return (
      <div className="header fixed w-full md:h-24 px-8 py-2 bg-gradient-to-b from-black z-30 flex md:justify-between sm:justify-around items-center sm: flex-col   md:flex-row">
        <Link to={"/browse"} onClick={() => dispatch(toggleGptPage(false))}>
          <img src={netflixLogo} alt="logo" className="h-24" />
        </Link>
        {user && (
          <div
            className="flex items-center p-2 gap-2 justify-center cursor-pointer sm:flex sm:flex-col md:flex-row"
            onMouseLeave={() => toggleDropdown(false)}
          >
            {
              <select
                className="p-2 rounded bg-gray-700 text-white"
                value={config.languageType}
                onChange={(e) => {
                  dispatch(updateLanguage(e?.target?.value));
                }}
              >
                {supportedLanguages?.map((language) => {
                  return (
                    <option
                      key={language.identifier}
                      value={language.identifier}
                    >
                      {language.name}
                    </option>
                  );
                })}
              </select>
            }
            <button
              className="bg-purple-500 py-2 px-4 text-white rounded mr-2"
              onClick={toggleGptSearch}
            >
              {!isGptSearch
                ? lang[languageType].gpt_search
                : lang[languageType].home_page}
            </button>
            <img
              src={userIcon}
              className="w-12 h-12 sm: hidden md:block"
              alt="user-icon"
            />
            {!isDropdownOpen ? (
              <FontAwesomeIcon
                icon={faAngleDown}
                className="text-white sm: hidden md:block"
                onMouseEnter={() => toggleDropdown(true)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleUp}
                className="text-white sm: hidden md:block"
              />
            )}
            <button
              className="font-bold text-white p-1 sm:block md:hidden"
              onClick={()=>{
                handleSignOut();
                dispatch(resetState());
              }}
            >
              {lang[languageType].sign_out}
            </button>

            {isDropdownOpen && (
              <div className="absolute top-20 right-9 bg-black p-3 w-30 ">
                <div className="flex flex-col">
                  <button
                    className="font-bold text-white p-1"
                    onClick={()=>{
                      handleSignOut();
                      dispatch(resetState());
                    }}
                  >
                    {lang[languageType].sign_out}
                  </button>
                  <button
                    className="text-white font-bold border-t-[1px] border-white p-1"
                    // onClick={() => dispatch(sendNotification(Math.random()))}
                  >
                    {lang[languageType].account}
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