import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import video from "../asset/bigbuck.mp4";
import { useNavigate } from "react-router-dom";


function Player() {
const vid ="https://autoembed.to/movie/tmdb/"

  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full sm:w-[100%]">
        <div className="absolute top-2 left-0 p-8 z-10 " >
          <BsArrowLeftCircle className="absolute left-3 top-[100px] cursor-pointer z-100" size={50} onClick={() => navigate(-1)} />
        </div>
        <video className="absolute top-20 p-[5px] w-[100%] h-[100%] object-cover" src={video} autoPlay loop controls muted ></video>
        </div>
      
    </>
  );
}

export default Player;
