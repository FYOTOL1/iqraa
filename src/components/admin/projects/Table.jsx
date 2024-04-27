import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteProject,
  GetProjects,
  PatchProject,
} from "../../../redux/reducers/ProjectsSlice";

export default function Table() {
  const Store = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const [ActiveRow, setActiveRow] = useState(0);
  const [ActiveEdit, setActiveEdit] = useState(0);

  const [Project_Name, setProject_Name] = useState(null);
  const [Subject, setSubject] = useState(null);
  const [Done, setDone] = useState(null);

  useEffect(() => {
    dispatch(GetProjects());
  }, []);

  useEffect(() => {
    dispatch(GetProjects());
  }, [ActiveEdit]);

  const PatchData = (id) => {
    if (
      dispatch(
        PatchProject({
          id,
          project_name: Project_Name,
          subject: Subject,
          done: Done,
        })
      )
    ) {
      dispatch(GetProjects()).then(() => {
        setActiveEdit(null);
        setActiveRow(null);
      });
    }
  };

  const DelProject = (e) => {
    if (dispatch(DeleteProject({ id: e }))) {
      dispatch(GetProjects());
    }
  };

  const initValues = (e) => {
    setProject_Name(e.project_name);
    setSubject(e.subject);
    setDone(e.done);
  };

  return (
    <>
      <div className="mt-3 md:mt-8 text-[8px] sm:text-[12px] md:text-sm lg:text-lg">
        <table className="w-full">
          <thead className="w-full bg-gray-100 outline outline-1 outline-gray-100">
            <tr className="h-7 md:h-10 lg:h-12">
              <th className="w-1/6">اسم الشروع</th>
              <th className="w-1/6">حالة التسليم</th>
              <th className="w-1/6">الموضوع</th>
              <th className="w-1/6">تاريخ</th>
              <th className="w-1/6">اخرى</th>
            </tr>
          </thead>{" "}
          <tbody>
            {Store.filter
              ? Store?.filter?.map((e, i) => (
                  <tr
                    key={i}
                    className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center overflow-scroll lg:overflow-x-clip"
                  >
                    {ActiveEdit != e?.id ? (
                      <>
                        <td>{e.project_name}</td>{" "}
                        <td>
                          <p
                            className={`rounded-full ${
                              e.done ? "bg-blue-500" : "bg-red-500"
                            } w-fit mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-[1px] text-white`}
                          >
                            {e.done ? "لقد تم" : "لم يتم"}
                          </p>
                        </td>
                        <td className="max-w-10 overflow-hidden text-nowrap">
                          {e.subject}
                        </td>
                        <td>{new Date(e.date).toLocaleDateString()}</td>
                        <td className="relative">
                          <button
                            onClick={(a) =>
                              ActiveRow != e.id
                                ? setActiveRow(e.id)
                                : setActiveRow(0)
                            }
                          >
                            <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-gray-100 cursor-pointer"></i>
                          </button>

                          {ActiveRow == e.id ? (
                            <div className="flex items-center justify-around gap-2 absolute top-0 right-[70%] w-20 sm:w-28 md:w-32 lg:w-40 h-full shadow-md bg-white outline outline-1 outline-gray-100 rounded-md">
                              <button onClick={(d) => DelProject(e.id)}>
                                <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-red-400 hover:text-white cursor-pointer"></i>
                              </button>
                              <button
                                onClick={(s) => {
                                  initValues(e);
                                  setActiveEdit(e.id);
                                }}
                              >
                                <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-blue-400 hover:text-white cursor-pointer"></i>
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="w-1/6">
                          <input
                            className="shadow-md mx-1 w-full max-w-44 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                            onChange={(x) => setProject_Name(x.target.value)}
                            type="text"
                            name="project_name"
                            value={
                              Project_Name != null
                                ? Project_Name
                                : e.project_name
                            }
                          />
                        </td>

                        <td className="w-1/6 px-2">
                          <select
                            defaultValue={e.done}
                            onChange={(s) => setDone(s.target.value)}
                            className="py-1 px-4 rounded-[4px] shadow-md outline-none cursor-pointer"
                          >
                            <option value={1} onClick={(o) => setDone(1)}>
                              تم
                            </option>
                            <option value={0} onClick={(o) => setDone(0)}>
                              لم يتم
                            </option>
                          </select>
                        </td>
                        <td className="w-1/6">
                          <input
                            className="shadow-md mx-1 w-full max-w-52 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                            onChange={(x) => setSubject(x.target.value)}
                            type="text"
                            name="subject"
                            value={Subject != null ? Subject : e.subject}
                          />
                        </td>
                        <td>---</td>
                        <td className="relative w-1/6">
                          <button
                            onClick={(s) => setActiveEdit(null)}
                            className="md:text-xs lg:text-base px-1 w-9 sm:w-12 md:w-16 py-[2px] my-[2px] bg-gray-50 text-black rounded-full transition-all hover:bg-gray-200 mx-1 outline outline-1 outline-gray-200"
                          >
                            الغاء
                          </button>
                          <button
                            onClick={(s) => {
                              PatchData(e.id);
                            }}
                            className="md:text-xs lg:text-base px-1 w-9 sm:w-12 md:w-16 py-[2px] my-[2px] bg-green-500 text-white rounded-full transition-all hover:bg-green-400 mx-1"
                          >
                            ارسال
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              : Store?.data?.map((e, i) => (
                  <tr
                    key={i}
                    className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center overflow-scroll lg:overflow-x-clip"
                  >
                    {ActiveEdit != e?.id ? (
                      <>
                        <td>{e.project_name}</td>{" "}
                        <td>
                          <p
                            className={`rounded-full ${
                              e.done ? "bg-blue-500" : "bg-red-500"
                            } w-fit mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-[1px] text-white`}
                          >
                            {e.done ? "لقد تم" : "لم يتم"}
                          </p>
                        </td>
                        <td className="max-w-10 overflow-hidden text-nowrap">
                          {e.subject.slice(0, 40)}
                        </td>
                        <td>{new Date(e.date).toLocaleDateString()}</td>
                        <td className="relative">
                          <button
                            onClick={(a) =>
                              ActiveRow != e.id
                                ? setActiveRow(e.id)
                                : setActiveRow(0)
                            }
                          >
                            <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-gray-100 cursor-pointer"></i>
                          </button>

                          {ActiveRow == e.id ? (
                            <div className="flex items-center justify-around gap-2 absolute top-0 right-[70%] w-20 sm:w-28 md:w-32 lg:w-40 h-full shadow-md bg-white outline outline-1 outline-gray-100 rounded-md">
                              <button onClick={(d) => DelProject(e.id)}>
                                <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-red-400 hover:text-white cursor-pointer"></i>
                              </button>
                              <button
                                onClick={(s) => {
                                  initValues(e);
                                  setActiveEdit(e.id);
                                }}
                              >
                                <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-blue-400 hover:text-white cursor-pointer"></i>
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="w-1/6">
                          <input
                            className="shadow-md mx-1 w-full max-w-44 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                            onChange={(x) => setProject_Name(x.target.value)}
                            type="text"
                            name="project_name"
                            value={
                              Project_Name != null
                                ? Project_Name
                                : e.project_name
                            }
                          />
                        </td>

                        <td className="w-1/6 px-2">
                          <select
                            defaultValue={e.done}
                            onChange={(s) => setDone(s.target.value)}
                            className="py-1 px-4 rounded-[4px] shadow-md outline-none cursor-pointer"
                          >
                            <option value={1} onClick={(o) => setDone(1)}>
                              تم
                            </option>
                            <option value={0} onClick={(o) => setDone(0)}>
                              لم يتم
                            </option>
                          </select>
                        </td>
                        <td className="w-1/6">
                          <input
                            className="shadow-md mx-1 w-full max-w-52 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                            onChange={(x) => setSubject(x.target.value)}
                            type="text"
                            name="subject"
                            value={Subject != null ? Subject : e.subject}
                          />
                        </td>
                        <td>---</td>
                        <td className="relative w-1/6">
                          <button
                            onClick={(s) => setActiveEdit(null)}
                            className="md:text-xs lg:text-base px-1 w-9 sm:w-12 md:w-16 py-[2px] my-[2px] bg-gray-50 text-black rounded-full transition-all hover:bg-gray-200 mx-1 outline outline-1 outline-gray-200"
                          >
                            الغاء
                          </button>
                          <button
                            onClick={(s) => {
                              PatchData(e.id);
                            }}
                            className="md:text-xs lg:text-base px-1 w-9 sm:w-12 md:w-16 py-[2px] my-[2px] bg-green-500 text-white rounded-full transition-all hover:bg-green-400 mx-1"
                          >
                            ارسال
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
