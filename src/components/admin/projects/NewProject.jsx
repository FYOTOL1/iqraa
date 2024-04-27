import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProjects,
  PostProject,
} from "../../../redux/reducers/ProjectsSlice";
import AdminAuth from "../../../Middlewares/AdminAuth";
import { GetUsers, search } from "../../../redux/reducers/UsersSlice";
import { Link } from "react-router-dom";

export default function NewProject() {
  const Store = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [Project_Name, setProject_Name] = useState("");
  const [Subject, setSubject] = useState("");
  const [Leader, setLeader] = useState(null);

  const AddProject = () => {
    const id = localStorage.getItem("id");
    if (id)
      if (Project_Name.length >= 2 && Subject.length >= 3 && Leader !== null)
        if (
          dispatch(
            PostProject({
              user_id: id,
              project_name: Project_Name,
              leader_id: Leader,
              subject: Subject,
              done: false,
            })
          )
        ) {
          dispatch(GetProjects());
          location.pathname = "/admin/projects";
        }
  };

  useEffect(() => {
    dispatch(GetUsers());
  }, []);

  const Status = (status) => {
    switch (status) {
      case 4:
        return "ادمن";
      case 3:
        return "مساعد ادمن";
      case 2:
        return "مشرف";
      case 1:
        return "مستخدم";
      default:
        return "Unknown";
    }
  };

  return (
    <>
      <AdminAuth>
        <div className="flex items-center justify-center w-full h-screen">
          <div className="px-4 py-16 sm:px-6 lg:px-8 w-full">
            <div className="mx-auto w-full lg:w-2/3">
              <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                مشروع جديد
              </h1>

              <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                بمجرد الضغط على اضافة سوف يتم رفع المشروع الى النظام
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                method="POST"
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 w-full"
              >
                <div>
                  <div className="relative">
                    <input
                      onChange={(e) => setProject_Name(e.target.value)}
                      type="text"
                      name="project_name"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline outline-1 outline-gray-200 transition-all focus:outline-gray-400"
                      placeholder="موضوع المشروع"
                      autoComplete="off"
                      maxLength={15}
                    />

                    <p className="absolute inset-y-0 end-0 grid place-content-center px-4 text-gray-500">
                      {Project_Name.length + " / " + 15}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      type="text"
                      name="subject"
                      className="w-full rounded-lg border-gray-200 p-4 pe-16 text-sm shadow-sm outline outline-1 outline-gray-200 transition-all focus:outline-gray-400"
                      placeholder="وصف المشروع"
                      autoComplete="off"
                      maxLength={40}
                    />

                    <p className="absolute inset-y-0 end-0 grid place-content-center px-4 text-gray-500">
                      {Subject.length + " / " + 40}
                    </p>
                  </div>
                </div>

                <div className="w-full rounded-[4px] shadow-lg p-2 outline outline-1 outline-gray-200">
                  <div className="flex w-full h-7">
                    <input
                      onChange={(s) => dispatch(search(s.target.value))}
                      className="w-full h-full outline outline-1 outline-gray-200 rounded-[4px] px-4 text-sm"
                      type="text"
                      placeholder="بحث عن مشرف"
                    />
                  </div>

                  {/* users */}
                  <div className="flex gap-2 flex-col overflow-y-scroll w-full mt-3 h-72">
                    {Store.filter.length
                      ? Store.filter.map((e) => (
                          <label
                            className={`flex items-center justify-between w-full p-1 shadow-sm transition-all cursor-pointer hover:bg-gray-50 hover:shadow-md rounded-md`}
                          >
                            <div className="flex items-center gap-2">
                              {e.avatar ? (
                                <img
                                  loading="lazy"
                                  className="h-5 w-5 rounded-full"
                                  src={`http://localhost/iqraa/avatars/${e.avatar}`}
                                  alt="Avatar"
                                />
                              ) : (
                                <i className="fa-solid fa-user flex items-center justify-center h-5 w-5 rounded-full bg-gray-100 text-xs"></i>
                              )}
                              <p>{e.username + " | " + Status(e.status)}</p>
                            </div>
                            <input
                              onChange={() => setLeader(e.username)}
                              type="radio"
                              checked={Leader == e.username}
                            />
                          </label>
                        ))
                      : Store.data.map((e) => (
                          <label
                            className={`flex items-center justify-between w-full p-1 shadow-sm transition-all cursor-pointer hover:bg-gray-50 hover:shadow-md rounded-md`}
                          >
                            <div className="flex items-center gap-2">
                              {e.avatar ? (
                                <img
                                  loading="lazy"
                                  className="h-5 w-5 rounded-full"
                                  src={`http://localhost/iqraa/avatars/${e.avatar}`}
                                  alt="Avatar"
                                />
                              ) : (
                                <i className="fa-solid fa-user flex items-center justify-center h-5 w-5 rounded-full bg-gray-100 text-xs"></i>
                              )}
                              <p>{e.username + " | " + Status(e.status)}</p>
                            </div>
                            <input
                              onClick={() => setLeader(e.id)}
                              type="radio"
                              checked={Leader == e.id}
                            />
                          </label>
                        ))}
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={(e) => AddProject()}
                  className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                >
                  ارسال
                </button>

                <Link
                  className="block text-center text-blue-500"
                  to={"/admin/projects"}
                >
                  رجوع
                </Link>
              </form>
            </div>
          </div>
        </div>
      </AdminAuth>
    </>
  );
}
