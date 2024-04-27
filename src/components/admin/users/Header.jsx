import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search } from "../../../redux/reducers/UsersSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <header className="flex items-center justify-between gap-3 w-full py-1 px-1 sm:px-4 md:px-5">
        {/* Search */}
        <div className="relative w-full sm:w-2/3 h-full">
          <label
            htmlFor="search"
            className="absolute left-3 top-[50%] translate-y-[-50%] text-gray-700 text-xs sm:text-lg"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input
            onChange={(e) => dispatch(search(e.target.value))}
            id="search"
            className="h-full w-full rounded-md shadow-sm ps-9 py-[2px] sm:py-[8px] outline outline-1 outline-gray-100 text-[#333] transition-all focus:outline-blue-300 placeholder:text-[10px] sm:placeholder:text-xs"
            type="text"
            placeholder="بحث عن مستخدمين"
          />
        </div>
        {/* Add User */}
        <Link
          to={"/admin/users/new"}
          className="flex items-center justify-center p-1 sm:p-2 w-32 h-full bg-blue-500 rounded-lg text-white text-xs sm:text-sm cursor-pointer transition-all hover:bg-blue-600"
        >
          اضافة مستخدم
        </Link>
      </header>
    </>
  );
}
