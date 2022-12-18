import axios from "axios";
import React from "react";
import requests from "../Request";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Player from "./Player";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context.js/AuthContext";
import Sidebar from "./Sidebar";

function Main() {
  const [saved, setSaved] = useState(false);
  // const [isAddToWatchLater, setIsAddToWatchLater] = useState(false);
  const { user } = UserAuth();
  const [movies, setmovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const movieID = doc(db, "users", `${user?.email}`);
  const saveShow = async (e) => {
    if (user?.email) {
      setSaved(!saved);
      // setIsAddToWatchLater(!isAddToWatchLater);
      await updateDoc(movieID, {
        watchLaterShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("please log in to Add TO WATCHLATER");
    }
  };

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setmovies(response.data.results);
    });
  }, []);
  // console.log(movie);
  const truncateString = (str, num, isFull) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black">
            {" "}
          </div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <Sidebar/>
        </div>
        <div className="absolute top-20 right-6 "><input
          className="peer relative top-0 right-0 z-10 bg-transparent w-12 h-12 rounded-full border cursor-pointer outline-none  
       focus:w-full focus:border-red-600 focus:pl-12 focus:pr-4 focus:border-2 transition ease-linear"

          type="search"
          name=""
          id=""
        /><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute inset-y-0 my-auto h-12 w-12 px-1 border-r stroke-red-500  border-transparent peer-focus:border-red  ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      </div>
        <div className="absolute w-full top-[30%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="group">
            <Link to="/Player">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 my-2 hover:bg-transparent hover:text-white hover:rounded-lg">
                Play
              </button>
            </Link>

            <button
              onClick={() => saveShow()}
              className="border text-white border-gray-300 py-2 px-5 ml-4 hover:bg-white hover:text-black hover:rounded-lg"
            >
              Watch Later
              {/* {isAddToWatchLater ? (
                <span>Remove from watchlater</span>
                ) : (
                <span>WatchLater</span>
              )} */}
            </button>
            <p className="text-gray-400 text-sm">{movie?.release_date}</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[35%] text-gray-200">
              {truncateString(movie?.overview, 200)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
