import React from "react";
import{ RiHeartAddLine,RiHeartFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { UserAuth } from "../context.js/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Moviepage from "./Moviepage";
import { BsBookmarkFill ,BsBookmarkPlus} from "react-icons/bs";
function Movie({ item }) {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isAddToWatchLater, setIsAddToWatchLater] = useState(false);

  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);
  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("please log in to Add TO FAVARATE");
    }
  };
  const saveWatchLaters = async () => {
    if (user?.email) {
      setIsAddToWatchLater(!isAddToWatchLater)
      setSaved(true);
      await updateDoc(movieID, {
        watchLaterShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("please log in to Add TO FAVARATE");
    }
  };


  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[280px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <Link to={`MoviePage/${item?.id}`}>
            <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
              {item?.title}
            </p>
          </Link>
          <p onClick={saveShow}>
            {like ? (
              <RiHeartFill size={35} className="absolute top-4 left-4 text-gray-300 " />
            ) : (
              <RiHeartAddLine size={35} className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
          <p onClick={saveWatchLaters}>
            { isAddToWatchLater?(
              <BsBookmarkFill size={35} className="absolute top-4 right-4 text-gray-300 " />
            ):(<BsBookmarkPlus size={35} className="absolute top-4 right-4 text-gray-300 "/>)

            }
          </p>
        </div>
      </div>
    </>
  );
}

export default Movie;
