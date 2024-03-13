import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between gap-3 w-full h-14 sm:h-16 md:h-20 p-3 sm:p-4 md:p-5">
        {/* Search */}
        <div className="relative w-full h-full">
          <label
            htmlFor="search"
            className="absolute left-3 top-[50%] translate-y-[-50%] text-gray-700"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input
            id="search"
            className="h-full w-2/3 rounded-md shadow-sm ps-9 outline outline-1 outline-gray-100 text-[#333] transition-all focus:outline-blue-300 placeholder:text-xs sm:placeholder:text-sm"
            type="text"
            placeholder="بحث عن مستخدمين"
          />
        </div>
        {/* Add User */}
        <Link className="flex items-center justify-center p-2 w-32 h-full bg-blue-500 rounded-lg text-white text-xs sm:text-sm cursor-pointer transition-all hover:bg-blue-600">
          اضافة مستخدم
        </Link>
      </header>
    </>
  );
}
