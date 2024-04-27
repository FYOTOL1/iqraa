import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../redux/reducers/UsersSlice";
import {
  DeleteNotification,
  GetNotifications,
} from "../../redux/reducers/NotificationsSlice";

export default function Header() {
  let UserNots = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [Path, setPath] = useState(location.pathname);
  const [ActiveList, setActiveList] = useState(false);

  const Sections = [
    { name: "الرئيسية", path: "/", icon: "fa-solid fa-house", active: false },
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
      name: "التقييم",
      path: "/rate",
      icon: "fa-solid fa-star-half-stroke",
      active: false,
    },

    {
      name: "مجموعات",
      path: "/groups",
      icon: "fa-solid fa-people-group",
      active: false,
    },
    {
      name: "لوحة التحكم",
      path: "/admin/users",
      icon: "fa-solid fa-chart-pie",
      active: false,
    },
  ];

  useEffect(() => {
    setPath(location.pathname);
    const id = localStorage.getItem("id");
    if (id) {
      dispatch(GetUser({ id }));
    }
  }, []);

  const DeleteMessages = () => {
    const id = localStorage.getItem("id");
    if (id) {
      dispatch(DeleteNotification({ to_id: id }));
    }
  };

  useEffect(() => {
    dispatch(GetNotifications());
  }, [DeleteMessages]);

  return (
    <>
      <div className="flex justify-between items-center w-full h-8 sm:h-16 bg-gray-100">
        <div className="lg:container mx-auto w-full px-2 lg:px-2">
          <ul className="flex items-center justify-between">
            {Sections &&
              Sections.map((e) => (
                <li
                  key={e.name}
                  className={`flex items-baseline sm:items-center flex-row-reverse gap-1  md:px-3 rounded-lg transition-all hover:bg-gray-300 cursor-pointer ${
                    Path == e.path ? "text-blue-500" : ""
                  }`}
                >
                  <Link
                    className="Text_Header text-[9px] py-1 sm:text-sm md:text-base"
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

            {!UserNots.user.status ? (
              <Link
                className="Login_Header flex items-center flex-row-reverse gap-2 bg-blue-500 text-white px-2 sm:px-3 md:px-5 py-1 rounded-full transition-all hover:bg-blue-300 text-[9px] sm:text-sm md:text-base"
                to="/login"
              >
                <p>تسجيل دخول</p>
                <i className="fa-solid fa-user"></i>
              </Link>
            ) : (
              <>
                <button
                  onClick={() => {
                    setActiveList(!ActiveList);
                    dispatch(GetNotifications());
                  }}
                  className={`lg:relative flex items-baseline sm:items-center flex-row-reverse gap-1 md:px-3 py-1 rounded-lg transition-all ${
                    !ActiveList ? "hover:bg-gray-300" : ""
                  }  cursor-pointer`}
                >
                  <p className="Text_Header text-[9px] sm:text-sm md:text-base">
                    <i className="fa-solid fa-bell Text_Header text-[9px] sm:text-sm md:text-base"></i>
                  </p>
                  {ActiveList ? (
                    <div className="absolute right-0 left-0 lg:left-[unset] lg:right-[-300px] top-[66px] lg:top-12 rounded-b-[4px] bg-white shadow-md outline outline-1 outline-gray-100 p-2 lg:w-96 z-20">
                      <ul className="flex flex-col gap-2">
                        <li className="flex items-center justify-between text-[14.5px] py-1">
                          {/* Delete All Nots */}
                          <button
                            onClick={(e) => DeleteMessages()}
                            className="bg-gray-100 rounded-md p-1 px-2 shadow-sm shadow-gray-100 transition-all hover:bg-gray-200"
                          >
                            <p>ازالة الجميع</p>
                          </button>
                        </li>
                        <hr />
                        {UserNots &&
                          UserNots.messages.map((e, i) => {
                            if (i <= 9) {
                              return (
                                <li
                                  key={i}
                                  className={`flex items-center justify-between ${
                                    e.status == 1
                                      ? "bg-red-50"
                                      : e.status == 2
                                      ? "bg-gray-50"
                                      : "bg-blue-50"
                                  } rounded-lg p-1 px-2`}
                                >
                                  <div className="text-sm">
                                    <p className="text-[#333] font-bold">
                                      {e.from_name}
                                    </p>
                                    <p className="text-[#333] text-xs">
                                      {e.date}
                                    </p>
                                  </div>
                                  <p
                                    className={`${
                                      e.status == 1
                                        ? "text-red-600"
                                        : e.status == 2
                                        ? "text-gray-600"
                                        : "text-blue-600"
                                    }`}
                                  >
                                    {e.message}
                                  </p>
                                </li>
                              );
                            }
                          })}
                      </ul>
                    </div>
                  ) : null}
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
