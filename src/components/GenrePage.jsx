import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import requests from "../Request";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";

function GenrePage() {
  const { gId } = useParams();
  const [data, setData] = useState([]);
  const [pageno, setPageno] = useState(1);
  const fetchURIforgId = requests.generes
    .replace(/genres=/, `${gId}`)
    .replace(/page=1/, `page=${pageno}`);

  const handelPrevPageNo = () => {
    if (pageno == 1) {
      setPageno(1);
    } else {
      setPageno(pageno - 1);
    }
  };
  const handelNextPageNo = () => {
    setPageno(pageno + 1);
  };

  useEffect(() => {
    try {
      axios.get(fetchURIforgId).then((response) => {
        setData(response.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [pageno]);

  return (
    <div>
      <Navbar />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
      <div className="absolute top-20 left-0">
        {data.map((item, id) => (
          <Movie key={id} item={item} />
        ))}
        <div className="flex justify-center items-center m-4">
          <button
            className="text-white py-3 px-2 bg-transparent border border-white rounded-l-lg hover:bg-red-500"
            onClick={() => handelPrevPageNo()}
          >
            Prev
          </button>
          <button className="text-white py-3 px-4 bg-transparent border border-white  hover:bg-red-500">{`${pageno}`}</button>
          <button
            className="text-white py-3 px-2 bg-transparent border border-white rounded-r-lg hover:bg-red-500"
            onClick={() => handelNextPageNo()}
          >
            Next
          </button>
        </div>
      </div>
      {console.log(data)}
    </div>
  );
}

export default GenrePage;
