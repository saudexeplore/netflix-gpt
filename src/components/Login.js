import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <img
        className="absolute top-0 left-0 h-screen w-screen"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
        alt="bg-image"
      />
      <div className="main-container z-10 relative">
        <Header />
        <div className="h-[calc(100vh-125px)] flex items-center justify-center pb-5">
          <div className="w-96 bg-black opacity-70 rounded-sm px-20">
            <h4 className="text-3xl text-white font-semibold mt-5 mb-3">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h4>
            {
              !isSignInForm && 
              <input
              type="text"
              placeholder="Full Name"
              className="rounded-sm p-2 my-2 w-full"
            />
            }
            <input
              type="text"
              placeholder="Email or Mobile number"
              className="rounded-sm p-2 my-2 w-full"
            />
            
            <input
              type="password"
              placeholder="Password"
              className="rounded-sm p-2 my-4 w-full"
            />
            <button className="py-2 px-4 text-white border border-gray-500 bg-red-700 w-full">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
