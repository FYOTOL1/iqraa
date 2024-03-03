import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [Path, setPath] = useState(location.pathname);
  const [ActiveList, setActiveList] = useState(false);

  const Sections = [
    { name: "الرئيسية", path: "/", icon: "fa-solid fa-house", active: false },
    {
      name: "مجموعات",
      path: "/groups",
      icon: "fa-solid fa-user-group",
      active: false,
    },
    {
      name: "اقتراحات",
      path: "/suggestions",
      icon: "fa-solid fa-lightbulb",
      active: false,
    },
    {
      name: "مشاريع",
      path: "/projects",
      icon: "fa-solid fa-list-check",
      active: false,
    },
    {
      name: "تقيم",
      path: "/rate",
      icon: "fa-solid fa-star-half-stroke",
      active: false,
    },
    {
      name: "محادثة",
      path: "/chat",
      icon: "fa-solid fa-comments",
      active: false,
    },
  ];

  useEffect(() => {
    setPath(location.pathname);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center w-full h-8 sm:h-16 bg-gray-100">
        <div className="lg:container mx-auto w-full px-2 lg:px-2">
          <ul className="flex items-center justify-between">
            {Sections &&
              Sections.map((e) => (
                <li
                  key={e.name}
                  className={`flex items-baseline sm:items-center flex-row-reverse gap-1 md:px-3 py-1 rounded-lg transition-all hover:bg-gray-300 cursor-pointer ${
                    Path == e.path ? "text-blue-500" : ""
                  }`}
                >
                  <Link
                    className="Text_Header text-[9px] sm:text-sm md:text-base"
                    to={e.path}
                  >
                    {e.name}
                  </Link>
                  <i
                    className={`${
                      e.icon
                    } ${"Text_Header text-[9px] sm:text-sm md:text-base"}`}
                  ></i>
                </li>
              ))}
            <Link
              className="Login_Header flex items-center flex-row-reverse gap-2 bg-blue-500 text-white px-2 sm:px-3 md:px-5 py-1 rounded-full transition-all hover:bg-blue-300 text-[9px] sm:text-sm md:text-base"
              to="/login"
            >
              <p>تسجيل دخول</p>
              <i className="fa-solid fa-user"></i>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
