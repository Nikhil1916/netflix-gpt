import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return(
        <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
         alt="login-bg" />
        </div>
        <form className="absolute top-[20%] left-[38%] w-3/12 bg-black flex flex-col p-12 text-white bg-opacity-80 rounded-lg">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />)    }
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
            <button className="py-4 my-4 bg-red-700 w-full rounded-lg" type="button" >{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={toggleSignInForm} className="cursor-pointer">
            {isSignInForm ? "New to Netflix? Sign up now." : "Already a User. Sign In Now?"}</p>
        </form>
        </div>
    )
}

export default Login;