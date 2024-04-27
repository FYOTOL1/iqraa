import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetUsers } from "../../../redux/reducers/UsersSlice";
import { DeleteRate, PatchRate } from "../../../redux/reducers/RateSlice";
import { PostNotification } from "../../../redux/reducers/NotificationsSlice";

export default function Table() {
  const Store = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [ActiveRow, setActiveRow] = useState(0);
  const [ActiveEdit, setActiveEdit] = useState(0);

  const [Id, setId] = useState(null);
  const [User_id, setUser_id] = useState(null);
  const [Mid_Rate, setMid_Rate] = useState(null);
  const [Finally_Rate, setFinally_Rate] = useState(null);

  useEffect(() => {
    dispatch(GetUsers());
  }, []);

  useEffect(() => {
    dispatch(GetUsers());
  }, [ActiveEdit]);

  const PatchData = (e) => {
    dispatch(
      PatchRate({
        id: Id,
        user_id: User_id,
        mid_rate: Mid_Rate,
        finally_rate: Finally_Rate,
      })
    ).then(() => {
      let from_id = localStorage.getItem("id");
      if (from_id) {
        let message = "تم تعديل مناقشتك";
        let status = 2;
        dispatch(
          PostNotification({ from_id, to_id: User_id, message, status })
        );
      }
      setActiveRow(null);
      setActiveEdit(null);
    });
  };

  const initValues = (e) => {
    setMid_Rate(e.mid_rate);
    setFinally_Rate(e.finally_rate);
    setUser_id(e.user_id);
    setId(e.id);
  };

  return (
    <>
      <div className="text-[8px] sm:text-[12px] md:text-sm lg:text-lg">
        <table className="w-full">
          <thead className="w-full bg-gray-100 outline outline-1 outline-gray-100">
            <tr className="h-7 md:h-10 lg:h-12">
              <th className="w-1/6">الاسم</th>
              <th className="w-1/6">مناقشة نصفية</th>
              <th className="w-1/6">مناقشة نهائية</th>
              <th className="w-1/6">المجموع</th>
              <th className="w-1/6">التاريخ</th>
              <th className="w-1/6">اخرى</th>
            </tr>
          </thead>
          <tbody>
            {Store.filter.length
              ? Store?.filter?.map((e, i) =>
                  e != null ? (
                    <tr
                      key={e.id}
                      className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center overflow-scroll lg:overflow-x-clip"
                    >
                      {ActiveEdit != e.id ? (
                        <>
                          <td>{e?.username}</td>
                          <td>{e?.mid_rate}</td>
                          <td className="max-w-10 overflow-hidden text-nowrap">
                            {e?.finally_rate}
                          </td>
                          <td>{Math.round(e.mid_rate + e.finally_rate)}</td>
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

                            {ActiveRow == e?.id ? (
                              <div className="flex items-center justify-around gap-2 absolute top-0 right-[70%] w-20 bg-white sm:w-28 md:w-32 lg:w-40 h-full shadow-md outline outline-1 outline-gray-100 rounded-md">
                                <button
                                  onClick={(d) =>
                                    dispatch(DeleteRate({ id: e.id })).then(
                                      (e) => dispatch(GetUsers())
                                    )
                                  }
                                >
                                  <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-red-400 hover:text-white cursor-pointer"></i>
                                </button>
                                <button
                                  onClick={(s) => {
                                    setActiveEdit(e?.id);
                                    initValues(e);
                                  }}
                                >
                                  <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-blue-400 hover:text-white cursor-pointer"></i>
                                </button>
                              </div>
                            ) : null}
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="w-1/6">---</td>

                          <td className="w-1/6">
                            <input
                              className="shadow-md mx-1 w-full max-w-44 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                              onChange={(x) => setMid_Rate(x.target.value)}
                              type="number"
                              name="username"
                              value={Mid_Rate != null ? Mid_Rate : e.mid_rate}
                            />
                          </td>

                          <td className="w-1/6">
                            <input
                              className="shadow-md mx-1 w-full max-w-52 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                              onChange={(x) => setFinally_Rate(x.target.value)}
                              type="number"
                              name="mid_rate"
                              value={
                                Finally_Rate != null
                                  ? Finally_Rate
                                  : e.finally_rate
                              }
                            />
                          </td>

                          <td>---</td>

                          <td>---</td>

                          {/* other */}
                          <td className="relative w-1/6">
                            <button
                              onClick={(s) => setActiveEdit(null)}
                              className="md:text-xs lg:text-base px-1 w-9 sm:w-12 md:w-16 py-[2px] my-[2px] bg-gray-50 text-black rounded-full transition-all hover:bg-gray-200 mx-1 outline outline-1 outline-gray-200"
                            >
                              الغاء
                            </button>
                            <button
                              onClick={(s) => {
                                setId(e?.id);
                                PatchData(User_id);
                              }}
                              className="md:text-xs lg:text-base px-1 w-9 sm:w-12 md:w-16 py-[2px] my-[2px] bg-green-500 text-white rounded-full transition-all hover:bg-green-400 mx-1"
                            >
                              ارسال
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ) : null
                )
              : Store?.rates?.map((e, i) =>
                  e != null ? (
                    <tr
                      key={e.id}
                      className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center overflow-scroll lg:overflow-x-clip"
                    >
                      {ActiveEdit != e.id ? (
                        <>
                          <td>{e?.username}</td>
                          <td>{e?.mid_rate}</td>
                          <td className="max-w-10 overflow-hidden text-nowrap">
                            {e?.finally_rate}
                          </td>
                          <td>{Math.round(e.mid_rate + e.finally_rate)}</td>
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

                            {ActiveRow == e?.id ? (
                              <div className="flex items-center justify-around gap-2 absolute top-0 right-[70%] w-20 bg-white sm:w-28 md:w-32 lg:w-40 h-full shadow-md outline outline-1 outline-gray-100 rounded-md">
                                <button
                                  onClick={(d) =>
                                    dispatch(DeleteRate({ id: e.id })).then(
                                      (e) => dispatch(GetUsers())
                                    )
                                  }
                                >
                                  <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-red-400 hover:text-white cursor-pointer"></i>
                                </button>
                                <button
                                  onClick={(s) => {
                                    setActiveEdit(e?.id);
                                    initValues(e);
                                  }}
                                >
                                  <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-blue-400 hover:text-white cursor-pointer"></i>
                                </button>
                              </div>
                            ) : null}
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="w-1/6">---</td>

                          <td className="w-1/6">
                            <input
                              className="shadow-md mx-1 w-full max-w-44 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                              onChange={(x) => setMid_Rate(x.target.value)}
                              type="number"
                              name="username"
                              value={Mid_Rate != null ? Mid_Rate : e.mid_rate}
                            />
                          </td>

                          <td className="w-1/6">
                            <input
                              className="shadow-md mx-1 w-full max-w-52 px-2 py-[2px] rounded-[4px] outline outline-1 outline-gray-200 transition-all focus:outline-blue-300"
                              onChange={(x) => setFinally_Rate(x.target.value)}
                              type="number"
                              name="mid_rate"
                              value={
                                Finally_Rate != null
                                  ? Finally_Rate
                                  : e.finally_rate
                              }
                            />
                          </td>

                          <td>---</td>

                          <td>---</td>

                          {/* other */}
                          <td className="relative w-1/6">
                            <button
                              onClick={(s) => setActiveEdit(null)}
                              className="md:text-xs lg:text-base px-1 w-9 sm:w-12 md:w-16 py-[2px] my-[2px] bg-gray-50 text-black rounded-full transition-all hover:bg-gray-200 mx-1 outline outline-1 outline-gray-200"
                            >
                              الغاء
                            </button>
                            <button
                              onClick={(s) => {
                                setId(e?.id);
                                PatchData(User_id);
                              }}
                              className="md:text-xs lg:text-base px-1 w-9 sm:w-12 md:w-16 py-[2px] my-[2px] bg-green-500 text-white rounded-full transition-all hover:bg-green-400 mx-1"
                            >
                              ارسال
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ) : null
                )}
          </tbody>
        </table>
      </div>
    </>
  );
}
