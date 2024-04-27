import React from "react";
import Header from "./Header";
const Login = () => {
    return(
        <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
         alt="login-bg" />
        </div>
        <form className="absolute top-[20%] left-[38%] w-3/12 bg-black flex flex-col p-12 text-white bg-opacity-80 rounded-lg">
            <h1 className="font-bold text-3xl py-4">Sign In</h1>
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
            <button className="py-4 my-4 bg-red-700 w-full rounded-lg">Sign In</button>
        </form>
        </div>
    )
}

export default Login;