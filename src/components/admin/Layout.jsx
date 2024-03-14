import React from "react";
import Header from "./users/Header";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  let pages = [
    { path: "dashboard", icon: "fa-solid fa-user-shield" },
    { path: "users", icon: "fa-solid fa-users" },
    { path: "suggestions", icon: "fa-solid fa-lightbulb" },
    { path: "projects", icon: "fa-solid fa-clipboard-list" },
    { path: "rate", icon: "fa-solid fa-star-half-stroke" },
  ];
  return (
    <>
      <div className="flex gap-5 w-full">
        <div className="w-[20%] p-4 hidden md:block">
          <div className="flex items-center justify-between gap-3 bg-[#f2f6ff] sm:p-2 md:p-3 md:px-1 rounded-full h-12 text-xs lg:text-base">
            <div className="flex items-center gap-2 text-xl">
              <i className="fa-solid fa-user flex items-center justify-center p-2 bg-white rounded-full"></i>
              <div className="sm:text-[10px] md:text-xs lg:text-sm hidden lg:block">
                <p>Admin</p>
                <p>{new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <button className="cursor-pointer transition-all rounded-full p-2 md:p-0 h-fit hover:mb-2">
              <i className="fa-solid fa-chevron-down px-2"></i>
            </button>
          </div>
          {/* Pages */}
          <ul className="flex items-center gap-2 flex-col w-full mt-10">
            {pages.map((e) => (
              <li className="transition-all hover:bg-blue-100 w-full rounded-md cursor-pointer text-gray-600 hover:text-black">
                <Link
                  to={"/admin/" + e.path}
                  className="flex items-baseline gap-2 flex-row-reverse justify-end p-2 "
                >
                  <p className="capitalize">{e.path}</p>
                  <i className={e.icon}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-[80%] min-h-screen bg-[#f3f7fdc8]">
          {children}
        </div>
      </div>
    </>
  );
}
