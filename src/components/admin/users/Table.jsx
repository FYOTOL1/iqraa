import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteUser,
  GetUsers,
  PatchUser,
} from "../../../redux/reducers/UsersSlice";

export default function Table() {
  const Store = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [ActiveRow, setActiveRow] = useState(0);
  const [ActiveEdit, setActiveEdit] = useState(0);

  const [Username, setUsername] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Status, setStatus] = useState(null);

  useEffect(() => {
    dispatch(GetUsers());
  }, []);

  useEffect(() => {
    dispatch(GetUsers());
  }, [ActiveEdit]);

  const PatchData = (id) => {
    if (
      dispatch(
        PatchUser({
          id,
          username: Username,
          email: Email,
          password: Password,
          status: Status,
        })
      )
    ) {
      dispatch(GetUsers());
      setActiveEdit(null);
      setActiveRow(null);
    }
  };

  const DelUser = (id) => {
    dispatch(DeleteUser({ id }));
  };

  const initValues = (e) => {
    setStatus(e.status);
    setUsername(e.username);
    setPassword(e.password);
    setEmail(e.email);
  };

  return (
    <>
      <div className="mt-3 md:mt-8 text-[8px] sm:text-[12px] md:text-sm lg:text-lg">
        <table className="w-full">
          <thead className="w-full bg-gray-100 outline outline-1 outline-gray-100">
            <tr className="h-7 md:h-10 lg:h-12">
              <th>ID</th>
              <th>اسم المستخدم</th>
              <th>البريد الالكتروني</th>
              <th>كلمة المرور</th>
              <th>المكانة</th>
              <th>اخرى</th>
            </tr>
          </thead>
          <tbody>
            {Store.filter != ""
              ? Store?.filter?.map((e, i) => (
                  <tr
                    key={i}
                    className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center overflow-scroll lg:overflow-x-clip"
                  >
                    {ActiveEdit != e?.id ? (
                      <>
                        <td>{e?.id}</td>
                        <td>{e.username}</td>
                        <td className="max-w-10 overflow-hidden text-nowrap">
                          {e.email}
                        </td>
                        <td>{e.password}</td>
                        <td>
                          {e.status == 4
                            ? "ادمن"
                            : e.status == 3
                            ? "مساعد ادمن"
                            : e.status == 2
                            ? "مشرف"
                            : e.status == 1
                            ? "مستخدم"
                            : "Unknown"}
                        </td>
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
                              {e.status != 4 ? (
                                <button onClick={(f) => DelUser(e.id)}>
                                  <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-red-400 hover:text-white cursor-pointer"></i>
                                </button>
                              ) : null}
                              {/* Edit */}
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
                        <td></td>
                        <td className="w-1/6">
                          <input
                            className="shadow-md mx-1 w-full max-w-24 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                            onChange={(x) => setUsername(x.target.value)}
                            type="text"
                            name="username"
                            value={Username != null ? Username : e.username}
                          />
                        </td>
                        <td className="w-1/6">
                          <input
                            className="shadow-md mx-1 w-full max-w-32 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                            onChange={(x) => setEmail(x.target.value)}
                            type="text"
                            name="email"
                            value={Email != null ? Email : e.email}
                          />
                        </td>
                        <td className="w-1/6">
                          <input
                            className="shadow-md mx-1 w-full max-w-32 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                            onChange={(x) => setPassword(x.target.value)}
                            type="text"
                            name="password"
                            value={Password != null ? Password : e.password}
                          />
                        </td>
                        {e.status != 4 ? (
                          <td className="w-1/6 px-2">
                            <select
                              defaultValue={e.status}
                              onChange={(s) => setStatus(s.target.value)}
                              className="py-1 rounded-[4px] shadow-md outline-none cursor-pointer min-w-20"
                            >
                              <option value={3} onClick={(o) => setStatus(3)}>
                                مساعد ادمن
                              </option>
                              <option value={2} onClick={(o) => setStatus(2)}>
                                مشرف
                              </option>
                              <option value={1} onClick={(o) => setStatus(1)}>
                                مستخدم
                              </option>
                            </select>
                          </td>
                        ) : (
                          <td className="w-1/6 px-2">
                            <select
                              defaultValue={e.status}
                              onChange={(s) => setStatus(s.target.value)}
                              className="py-1 rounded-[4px] shadow-md outline-none cursor-pointer min-w-20"
                            >
                              <option value={4} onClick={(o) => setStatus(4)}>
                                ادمن
                              </option>
                            </select>
                          </td>
                        )}

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
                        <td>{e?.id}</td>
                        <td>{e?.username}</td>
                        <td className="max-w-10 overflow-hidden text-nowrap">
                          {e?.email}
                        </td>
                        <td>{e?.password}</td>
                        <td>
                          {e.status == 4
                            ? "ادمن"
                            : e.status == 3
                            ? "مساعد ادمن"
                            : e.status == 2
                            ? "مشرف"
                            : e.status == 1
                            ? "مستخدم"
                            : "Unknown"}
                        </td>
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
                              {e.status != 4 ? (
                                <button onClick={(f) => DelUser(e.id)}>
                                  <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-red-400 hover:text-white cursor-pointer"></i>
                                </button>
                              ) : null}
                              {/* Edit */}
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
                        <td></td>
                        <td className="w-1/6">
                          <input
                            className="shadow-md mx-1 w-full max-w-24 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                            onChange={(x) => setUsername(x.target.value)}
                            type="text"
                            name="username"
                            value={Username != null ? Username : e.username}
                          />
                        </td>
                        <td className="w-1/6">
                          <input
                            className="shadow-md mx-1 w-full max-w-32 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                            onChange={(x) => setEmail(x.target.value)}
                            type="text"
                            name="email"
                            value={Email != null ? Email : e.email}
                          />
                        </td>
                        <td className="w-1/6">
                          <input
                            className="shadow-md mx-1 w-full max-w-32 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                            onChange={(x) => setPassword(x.target.value)}
                            type="text"
                            name="password"
                            value={Password != null ? Password : e.password}
                          />
                        </td>
                        {e.status != 4 ? (
                          <td className="w-1/6 px-2">
                            <select
                              defaultValue={e.status}
                              onChange={(s) => setStatus(s.target.value)}
                              className="py-1 rounded-[4px] shadow-md outline-none cursor-pointer min-w-20"
                            >
                              <option value={3} onClick={(o) => setStatus(3)}>
                                مساعد ادمن
                              </option>
                              <option value={2} onClick={(o) => setStatus(2)}>
                                مشرف
                              </option>
                              <option value={1} onClick={(o) => setStatus(1)}>
                                مستخدم
                              </option>
                            </select>
                          </td>
                        ) : (
                          <td className="w-1/6 px-2">
                            <select
                              defaultValue={e.status}
                              onChange={(s) => setStatus(s.target.value)}
                              className="py-1 rounded-[4px] shadow-md outline-none cursor-pointer min-w-20"
                            >
                              <option value={4} onClick={(o) => setStatus(4)}>
                                ادمن
                              </option>
                            </select>
                          </td>
                        )}

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
