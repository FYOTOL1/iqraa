import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const [ActiveList, setActiveList] = useState(false);

  let pages = [
    { id: 1, name: "الرئيسية", path: "/", icon: "fa-solid fa-home" },
    {
      id: 2,
      name: "المستخدمين",
      path: "/admin/users",
      icon: "fa-solid fa-users",
    },
    {
      id: 3,
      name: "الاقتراحات",
      path: "/admin/suggestions",
      icon: "fa-solid fa-lightbulb",
    },
    {
      id: 4,
      name: "المشاريع",
      path: "/admin/projects",
      icon: "fa-solid fa-clipboard-list",
    },
    {
      id: 5,
      name: "تقييم",
      path: "/admin/rate",
      icon: "fa-solid fa-clipboard-list",
    },
    {
      id: 5,
      name: "المجموعات",
      path: "/admin/groups",
      icon: "fa-solid fa-clipboard-list",
    },
  ];

  return (
    <div className="relative flex gap-5 w-full">
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
            <li
              key={e.id}
              className="transition-all hover:bg-blue-100 w-full rounded-md cursor-pointer text-gray-600 hover:text-black"
            >
              <Link
                to={e.path}
                className="flex items-baseline gap-2 flex-row-reverse justify-end p-2 "
              >
                <p className="capitalize">{e.name}</p>
                <i className={e.icon}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {ActiveList ? (
        <div className="block md:hidden absolute top-0 bottom-0 right-0 left-0 bg-white z-10 p-2">
          <header className="flex items-center justify-end gap-2">
            <button onClick={(e) => setActiveList(false)}>
              <i className="block md:hidden fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-gray-100 cursor-pointer"></i>
            </button>
          </header>

          <hr className="my-2" />

          <div className="w-full sm:p-4 block md:hidden">
            <div className="flex items-center justify-between gap-3 bg-[#f2f6ff] sm:p-2 md:p-3 md:px-1 rounded-full h-12 text-xs lg:text-base">
              <div className="flex items-center gap-2 text-xl px-2">
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
                <li
                  key={e.id}
                  className="transition-all hover:bg-blue-100 w-full rounded-md cursor-pointer text-gray-600 hover:text-black"
                >
                  <Link
                    to={e.path}
                    className="flex items-baseline gap-2 flex-row-reverse justify-end p-2 "
                  >
                    <p className="capitalize">{e.name}</p>
                    <i className={e.icon}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      <div className="w-full md:w-[80%] min-h-screen bg-[#f3f7fdc8]">
        {!ActiveList ? (
          <button
            onClick={(e) => setActiveList(true)}
            className="left-[-3px] z-10 bg-white w-full shadow-sm"
          >
            <i className="block md:hidden fa-solid fa-ellipsis p-1 rounded-full transition-all hover:bg-gray-100 cursor-pointer"></i>
          </button>
        ) : null}
        {children}
      </div>
    </div>
  );
}
