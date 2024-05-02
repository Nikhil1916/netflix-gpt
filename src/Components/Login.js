import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "./../Utils/validate";
import {createUserWithEmailAndPassword  , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg , setErrorMsg] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    const submitForm = async(e) => {
        e?.preventDefault();
        //validate the form data
        const message = checkValidData(email?.current?.value, password?.current?.value);
        setErrorMsg(message);
        if(message) return;
        if(!isSignInForm) {
            console.log(message, isSignInForm);
            
             createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: name?.current?.value,
                }).then(() => {
                  // Profile updated!
                  //we will take the latest value from auth as user will not have display name and photourl  
                  const {uid, displayName, email} = auth.currentUser;
                  dispatch(addUser({uid,email,displayName}));
                  // ...
                }).catch((error) => {
                  // An error occurred
                  // ...
                });
                console.log(userCredential);
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode+"-"+errorMessage);
                // ..
              });
        } else {
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user, 'login');
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode+"-"+errorMessage);
              });
        }
    }

    return(
        <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
         alt="login-bg" className="login-bg w-[100%] h-[100%]" />
        </div>
        <form className="absolute top-[20%] left-[38%] w-3/12 bg-black flex flex-col p-12 text-white bg-opacity-80 rounded-lg">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg" ref={name} />)    }
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg" ref={email} />
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg" ref={password} />
            <p className="text-red-600 font-bold">{errorMsg}</p>
            <button onClick={(e)=>submitForm(e)} className="py-4 my-4 bg-red-700 w-full rounded-lg" type="button" >{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={toggleSignInForm} className="cursor-pointer">
            {isSignInForm ? "New to Netflix? Sign up now." : "Already a User. Sign In Now?"}</p>
        </form>
        </div>
    )
}

export default Login;