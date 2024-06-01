import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "./../Utils/validate";
import {createUserWithEmailAndPassword  , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BG_URL } from "../Utils/constants";
import { googleLogin, handleSignOut } from "../Utils/functions";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg , setErrorMsg] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const navigate= useNavigate();
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
             createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: name?.current?.value,
                }).then(() => {
                  navigate("/browse");
                  // Profile updated!
                  //we will take the latest value from auth as user will not have display name and photourl  
                  const {uid, displayName, email} = auth.currentUser;
                  dispatch(addUser({uid,email,displayName}));
                  // ...
                }).catch((error) => {
                  // An error occurred
                  // ...
                });
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
                // const user = userCredential.user;
                navigate("/browse");
                const logOutTimer = setTimeout(()=>{
                  handleSignOut()
                  clearTimeout(logOutTimer);
                },60 * 60 * 1000);
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
        <div className="fixed">
        <img src={BG_URL}
         alt="login-bg" className="login-bg w-screen h-screen object-cover" />
        </div>
        <form className="sm: w-full absolute top-[16%] md:left-[38%] md:w-3/12 bg-black flex flex-col p-5 text-white bg-opacity-80 rounded-lg">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg" ref={name} />)    }
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg" ref={email} />
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg" ref={password} />
            <p className="text-red-600 font-bold">{errorMsg}</p>
            <button onClick={(e)=>submitForm(e)} className="py-4 my-4 bg-red-700 w-full rounded-lg" type="button" >{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <div className="flex justify-center">
            <p onClick={toggleSignInForm} className="cursor-pointer">{isSignInForm ? "New to Netflix? Sign up now." : "Already a User. Sign In Now?"}</p>
            </div>
            <div className="flex justify-center pt-4">
              <img src="/images/googleLogin.png" onClick={googleLogin} alt="Google sign-in" className="h-10 w-40 cursor-pointer" />
            </div>
        </form>
        </div>
    )
}

export default Login;