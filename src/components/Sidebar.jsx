import React, { useState } from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  const [open, setOpen] = useState(false);
  const [GenresId, setGenresId] = useState([]);
  const [strid, setStrid] = useState("");
  const Menus = [
    { name: "Action", id: 28, gap: true },
    { name: "Adventure", id: 12, gap: true },
    { name: "Animation", id: 16, gap: true },
    { name: "Comedy", id: 35, gap: true },
    { name: "Crime", id: 80, gap: true },
    { name: "Documentry", id: 99, gap: true },
    { name: "Drama", id: 18, gap: true },
    { name: "Family", id: 10751, gap: true },
    { name: "Fantasy", id: 14, gap: true },
    { name: "History", id: 36, gap: true },
    { name: "Music", id: 10402, gap: true },
    { name: "Mystery", id: 9648, gap: true },
    { name: "Romance", id: 10749, gap: true },
    { name: "Science Fiction", id: 878, gap: true },
    { name: "Tv Movie", id: 10770, gap: true },
    { name: "Thriller", id: 53, gap: true },
    { name: "War", id: 10752, gap: true },
    { name: "Western", id: 37, gap: true },
  ];
  const handleGenresID = (e) => {
    if (e.target.checked) {
      GenresId.push(e.target.value);
    } else {
      let index = GenresId.indexOf(e.target.value);
      if (index > -1) {
        GenresId.splice(index, 1);
      }
    }
    let str = GenresId.toString();
    setStrid(str);
  };

  return (
    <div className="flex absolute top-9 left-10  ">
      <div
        className={` ${
          open ? "w-72 overflow-y-scroll" : "w-0"
        } bg-gray-900 bg-blend-color-burn h-[80vh] top-7 -left-10 pt-8 z-10 relative duration-300 rounded-lg  scrollbar-hide scroll-smooth`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`absolute cursor-pointer right-1  w-10
             border-2 rounded-full  ${
               !open && "  border-red-500 rotate-180 left-5 top-2 "
             } ${open && " border-0 text-red-500 "} transition ease-in-out `}
          onClick={() => setOpen(!open)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <div className="flex gap-x-4 items-center ">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 pl-6 ${
              !open && "scale-0"
            }`}
          >
            Generes
          </h1>
          <Link to={`GenrePage/${strid}`}>
            <button
              className={` text-xs py-1 px-2 bg-fuchsia-900 rounded hover:bg-fuchsia-500 ${
                !open && "scale-0"
              }`}
            >
              ShowResult
            </button>
          </Link>
        </div>

        <ul className="pt-6 ">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-500 text-sm items-right relative gap-x-4 hover:text-slate-200 hover:pt-2 hover:-top-3 hover:mt-2 hover:scale-150 transition
               justify-center`}
            >
              <span
                className={`${!open && "hidden"} origin-left duration-200  `}
              >
                <input
                  type="checkbox"
                  id={`${Menu.id}`}
                  value={`${Menu.id}`}
                  onChange={(e) => handleGenresID(e)}
                  className=" h-3 w-3"
                />
                <label htmlFor={`${Menu.id}`} className="mx-3">
                  {Menu.name}
                </label>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
