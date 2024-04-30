import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store)=>store.user);
    console.log(user);
    const handleSignOut = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            navigate("/");
          })
          .catch((error) => {
            // An error happened.
            navigate("/error");
          });
          
    }
    return (
        <div className="header absolute w-full h-24 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo" className="h-24"
            />
            {
             user && 
            <div className="flex p-2 gap-2">
            <img src="https://occ-0-3240-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" className="w-12 h-12" alt="user-icon"/>
            <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
            </div>
            }
        </div>
    )
}

export default Header;