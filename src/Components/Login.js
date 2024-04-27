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
        <form className="absolute top-[30%] left-[38%] w-3/12 bg-black flex flex-col p-4">
            <input type="text" placeholder="Email Address" className="p-2 m-2" />
            <input type="password" placeholder="Password" className="p-2 m-2" />
            <button className="p-4 m-4 bg-black text-white">Sign In</button>
        </form>
        </div>
    )
}

export default Login;