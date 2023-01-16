import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import requests from "../Request";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import { data } from "autoprefixer";
import { BsGraphUp } from "react-icons/bs";
import  "./Global.css";
function Moviepage() {
  const { mId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  let fetchURIforId = requests.requestById.replace(/{movie_id}/, `${mId}`);

  useEffect(() => {
    try {
      axios.get(fetchURIforId).then((response) => {
        setMovieData(response.data);
        setGenres(response.data.genres);
        console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [fetchURIforId]);
  return (
    <div
      style={{
        background: "black",
        backgroundImage: "none",
      }}
    >
      <div className="absolute top-[70px] left-0 w-full h-full">
        <iframe
          className="text-white"
          src={`https://autoembed.to/movie/tmdb/${mId}`}
          width="100%"
          height="100%"
          title={`${mId}`}
          allowFullScreen
          allow="autoplay"
        />
       
        <h1 className="text-white text-3xl sm:py-5 py-8 px-6 liner bg-gradient-to-r from-red-900 to-red-400 ">
          {movieData.title}
        </h1>
        <div className="liner bg-gradient-to-r from-slate-700 to-transparent  ">
          <h3 className="text-slate-200 text-2xl italic  py-3 px-2">
            <span className="py-3">{movieData.tagline}</span>
          </h3>
          <p className="text-slate-300 text-xl px-6">{movieData.overview}</p>
        </div>
        <div className="linear bg-gradient-to-r from-slate-700 to-transparent">
          <p className="text-gray-400 py-3 px-6 space-x-4   ">
            {genres.map((item) => (
              <span key={item.id} className="border px-2 py-1 rounded-xl"> {item.name} </span>
            ))}
          </p>
        </div>
        <div className="linear bg-gradient-to-r from-slate-700  to-transparent">
          <p className="py-2 flex text-lg  px-6  text-gray-400">
            <label htmlFor="" className="flex">Popularity <span><BsGraphUp /></span></label>
            <span className="px-5">{movieData.popularity}</span>
          </p>
          <p className="text-gray-400 py-3 px-6">
            <label htmlFor="">Status </label> <span className="px-2">{movieData.status}</span>
            <label htmlFor="">Release Date </label>
            <span className="px-2">{movieData.release_date}</span> 
          </p>
          <p className="text-gray-400 py-3 px-6">
            {" "}
            <label htmlFor="">Average Vote </label> <span className="px-2"> {movieData.vote_average}</span>
            <span className="italic px-2"> from </span>
            <label htmlFor="">Total vote </label> <span className="px-2">{movieData.vote_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Moviepage;
