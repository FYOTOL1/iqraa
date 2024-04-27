import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search } from "../../redux/reducers/ProjectsSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const Search = (e) => {
    dispatch(search(e));
  };

  return (
    <>
      <div className="flex items-center justify-between gap-2 w-full py-1 md:py-2 px-1 md:px-2 lg:px-3 bg-white shadow-md rounded-md outline outline-1 outline-gray-100 text-[8px] sm:text-[12px] md:text-sm lg:text-lg overflow-hidden">
        <div className="Search_Bar relative w-full">
          <label
            className="absolute top-[50%] translate-y-[-50%] left-4 z-10 text-gray-500"
            htmlFor="search"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input
            onChange={(e) => Search(e.target.value)}
            id="search"
            className="relative h-6 sm:h-8 md:h-10 w-full ps-10 pe-2 outline outline-1 outline-gray-100 shadow-sm rounded-[4px] transition-all focus:outline-3 focus:outline-gray-400"
            type="search"
            autoComplete="off"
            placeholder="بحث..."
          />
        </div>
      </div>
    </>
  );
}
