import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProjects, PostProject } from "../../redux/reducers/ProjectsSlice";
import { Link } from "react-router-dom";

export default function NewProject() {
  const dispatch = useDispatch();
  const [Project_Name, setProject_Name] = useState("");
  const [Subject, setSubject] = useState("");

  const AddProject = () => {
    const id = localStorage.getItem("id");
    let Group_Id = location.pathname.split("/")[2];
    if (id && Group_Id) {
      console.log(Group_Id);
      if (Project_Name.length >= 2 && Subject.length >= 3) {
        if (
          dispatch(
            PostProject({
              user_id: id,
              project_name: Project_Name,
              leader_id: id,
              group_id: Group_Id,
              subject: Subject,
              done: false,
            })
          )
        ) {
          location.pathname = `/groups/${Group_Id}`;
        }
      }
    }
  };

  return (
    <>
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
                    required
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
                    required
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
              <button
                type="submit"
                onClick={(e) => AddProject()}
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                ارسال
              </button>

              <Link className="block text-center text-blue-500" to={"/groups"}>
                رجوع
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
