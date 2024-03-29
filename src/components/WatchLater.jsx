import React from "react";
import { useState, useEffect } from "react";
import { UserAuth } from "../context.js/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
// import { async } from "@firebase/util";
import { BsBookmarkDashFill } from "react-icons/bs";
function WatchLater() {
  const [watchLaterMovies, setWatchLaterMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setWatchLaterMovies(doc.data()?.watchLaterShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const removeFromWatchLater = async (passedID) => {
    try {
      const result = watchLaterMovies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        watchLaterShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    < >

        <h1 className="text-white text-3xl sm:py-5 py-8 px-6 liner bg-gradient-to-r"></h1>
    <div className=" ">
        <div className="relative p-4 md:p-8 ">
          <div className="my-3">
            <h1 className="relative  top-[50%] left-[5px]  text-3xl  text-white font-bold md:text-4xl p-4  sm:text-4xl">
              Watch Later
              <span className="text-xl inline-block">
                <BsBookmarkDashFill />
              </span>
            </h1>
          </div>

          <div className=" absolute top-[70%] left-0 w-full h-full scroll-smooth scrollbar-hide ">
            {watchLaterMovies && (watchLaterMovies.map((item) => (
              <div
                key={item.id}
                className="mywidth mx-2 w-[160px] sm:w-[190px] md:w-[240px] lg:w-[320px] inline-block cursor-pointer relative p-2 xl:w-[280px] 2xl:w-[290px]"
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />

                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <Link to={`MoviePage/${item?.id}`}>
                    <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                      {item?.title}
                    </p>
                  </Link>
                  <p
                    onClick={() => removeFromWatchLater(item.id)}
                    className="absolute text-gray-300 top-4 right-4"
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            )))
            
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchLater;
