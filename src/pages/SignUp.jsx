import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context.js/AuthContext";
import { useState } from "react";
// import { async } from "@firebase/util";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp,googleSignIn, facebookSignIn  } = UserAuth();
  const navigate=useNavigate()

  const handleFacebookSignIn = async () => {
    try {
      await facebookSignIn();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleGooleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/4d9d5abf-07d8-4dd6-9899-a96b902312ee/IN-en-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-15">
            <h1 className="text-3xl font-bold pt-3">Sign Up</h1>
            <form
              action=""
              className="w-full flex flex-col py-4"
              onSubmit={handleSubmit}
            >
              <></>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                
                autoComplete="email"
                placeholder="Email"
                className="p-3 my-2 bg-gray-700 rounded"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                
                autoComplete="current-password"
                placeholder="Password"
                className="p-3 my-2 bg-gray-700 rounded"
                minLength={6}
              />
              <button
                type="submit"
                className="bg-red-600 py-3 my-3 font-bold rounded"
              >
                Sign Up

                
              </button>
              <hr className="mx-auto w-[80%] pb-3" />
              <div className="space-y-5">
                <span></span>
              <button
                onClick={() => handleGooleSignIn()}
                type="button"
                className="w-[320px] text-stone-400 hover:text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-3"
              >
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign in with Google
              </button>

              <button
                onClick={() => handleFacebookSignIn()}
                type="button"
                className="w-[320px] text-stone-400 hover:text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
              >
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                  ></path>
                </svg>
                Sign in with Facebook
              </button>
              <span></span>
              </div>
              <div className="flex justify-between items-center w-full my-4">
                <p className="text-gray-600">
                  <input type="checkbox" name="" id="" />
                  Remember Me
                </p>
                <p className="text-gray-600">Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">
                  Already subscribe to Netflix?
                </span>
                <Link to="/signUp">Sign In</Link>
              </p>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
