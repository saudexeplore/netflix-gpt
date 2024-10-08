import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkvalidData} from "../utils/validate"
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser } from "../utils/userSlice"
import { AVTAR_IMG, BACK_IMG } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMesseg, seterrorMesseg] = useState(null);
  const dispatch = useDispatch()

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const handleButtonClick = ()=>{
    const messeg = checkvalidData(email.current.value, password.current.value)
    seterrorMesseg(messeg);
    if(messeg) return
    // sign up and sign in logic start 
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      updateProfile(user, {
        displayName: name.current.value, photoURL: AVTAR_IMG
      }).then(() => {
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));        
      }).catch((error) => {
      });      
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode+ "-" + errorMessage);
      });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    const user = userCredential.user;
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+ "-" + errorMessage);
    });
    }

    
  }

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <img
        className="absolute top-0 left-0 h-screen w-screen"
        src={BACK_IMG}
        alt="bg-image"
      />
      <div className="main-container z-10 relative">
        <Header />
        <div className="h-[calc(100vh-125px)] flex items-center justify-center pb-5">
          <div className="w-96 bg-black opacity-70 rounded-sm px-16">
            <form onSubmit={(e) => e.preventDefault()}>
            <h4 className="text-3xl text-white font-semibold mt-5 mb-3">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h4>
            {
              !isSignInForm && 
              <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="rounded-sm p-2 my-2 w-full"
            />
            }
            <input
            ref={email}
              type="text"
              placeholder="Email or Mobile number"
              className="rounded-sm p-2 my-2 w-full"
            />
            
            <input
            ref={password}
              type="password"
              placeholder="Password"
              className="rounded-sm p-2 my-4 w-full"
            />
            <p className="text-red-700 mb-2">{errorMesseg}</p>
            <button className="py-2 px-4 text-white border border-gray-500 bg-red-700 w-full" onClick={handleButtonClick}>
              { isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-white my-3 text-center">OR</p>
            <button className="py-2 px-4 text-white bg-slate-800 w-full text-center">
              Use sign in Code?
            </button>
            <div className="text-center my-3">
              <a href="#" className="text-lg text-white">
                Forgot Password?
              </a>
              <p className="my-2 text-slate-400">
                {isSignInForm ? "New to Netflix? " : "Already Member "}
                <a
                  className="text-white text-xl"
                  href="#"
                  onClick={toggleSignInForm}
                >
                  {isSignInForm ? "Sign Up" : "sign In"}
                </a>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
