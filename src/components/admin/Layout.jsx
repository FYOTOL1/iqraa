import React from "react";
import Header from "./users/Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex gap-5 w-full">
        <div className="w-[20%] p-4 hidden md:block">
          <div className="flex items-center justify-between gap-3 bg-[#f2f6ff] sm:p-2 md:p-3 md:px-1 rounded-full h-12 text-xs lg:text-base">
            <div className="flex items-center gap-2 text-xl">
              <i class="fa-solid fa-user flex items-center justify-center p-2 bg-white rounded-full"></i>
              <div className="sm:text-[10px] md:text-xs lg:text-sm hidden md:block">
                <p>Admin</p>
                <p>{new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <button className="cursor-pointer transition-all rounded-full p-2 md:p-0 h-fit hover:mb-2">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          {/* Pages */}
          <ul className="flex items-center gap-2 flex-col w-full mt-10">
            <li className="flex items-baseline gap-2 flex-row-reverse justify-end p-2 transition-all hover:bg-blue-100 w-full rounded-md cursor-pointer text-gray-600 hover:text-black">
              <p>Users</p>
              <i class="fa-solid fa-users"></i>
            </li>
            <li className="flex items-baseline gap-2 flex-row-reverse justify-end p-2 transition-all hover:bg-blue-100 w-full rounded-md cursor-pointer text-gray-600 hover:text-black">
              <p>Suggestions</p>
              <i class="fa-solid fa-lightbulb"></i>
            </li>
            <li className="flex items-baseline gap-2 flex-row-reverse justify-end p-2 transition-all hover:bg-blue-100 w-full rounded-md cursor-pointer text-gray-600 hover:text-black">
              <p>Projects</p>
              <i class="fa-solid fa-clipboard-list"></i>
            </li>
            <li className="flex items-baseline gap-2 flex-row-reverse justify-end p-2 transition-all hover:bg-blue-100 w-full rounded-md cursor-pointer text-gray-600 hover:text-black">
              <p>Rate</p>
              <i class="fa-solid fa-star-half-stroke"></i>
            </li>
            <li className="flex items-baseline gap-2 flex-row-reverse justify-end p-2 transition-all hover:bg-blue-100 w-full rounded-md cursor-pointer text-gray-600 hover:text-black">
              <p>Dashboard</p>
              <i class="fa-solid fa-user-shield"></i>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-[80%] min-h-screen bg-[#f3f7fdc8]">
          <Header />
          <hr className="ms-4" />
          {children}
        </div>
      </div>
    </>
  );
}
