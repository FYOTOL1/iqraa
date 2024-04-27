import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminAuth from "../../../Middlewares/AdminAuth";
import { GetUsers, search } from "../../../redux/reducers/UsersSlice";
import { PostRate } from "../../../redux/reducers/RateSlice";
import { PostNotification } from "../../../redux/reducers/NotificationsSlice";
import { Link } from "react-router-dom";

export default function NewRate() {
  const Store = useSelector((state) => state.users);
  const Rate = useSelector((state) => state.rates);
  const dispatch = useDispatch();
  const [User_id, setUser_id] = useState("");
  const [Mid_Rate, setMid_Rate] = useState("");
  const [Finally_Rate, setFinally_Rate] = useState("");
  const [Msg, setMsg] = useState(false);

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

  const SendRate = () => {
    if (Mid_Rate && Finally_Rate && User_id) {
      dispatch(
        PostRate({
          mid_rate: Mid_Rate,
          finally_rate: Finally_Rate,
          user_id: User_id,
        })
      ).then(() => {
        if (Store.success) {
          let from_id = localStorage.getItem("id");
          if (from_id)
            dispatch(
              PostNotification({
                from_id,
                to_id: User_id,
                message: "تم رفع مناقشتك",
                status: 3,
              })
            ).then(() => {
              location.pathname = "/admin/rate";
            });
        }
      });
    }
  };

  useEffect(() => {
    if (Rate.success) {
      location.pathname = "/admin/rate";
      setMsg(false);
    }
    if (Rate.error !== null && Rate?.error?.length) {
      setMsg(true);
    }
  }, [SendRate]);

  return (
    <>
      {Msg == true && (
        <button
          onClick={(e) => setMsg(false)}
          className="absolute top-0 right-0 left-0 h-10 p-2 bg-gray-200 shadow-sm"
        >
          <p className="text-center font-bold text-[#363063]">{Rate.error}</p>
        </button>
      )}
      <AdminAuth>
        <div className="flex items-center justify-center w-full min-h-screen overflow-x-hidden">
          <div className="px-4 py-16 sm:px-6 lg:px-8 w-full">
            <div className="mx-auto w-full lg:w-2/3">
              <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                مناقشة جديد
              </h1>

              <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                بمجرد الضغط على اضافة سوف يتم رفع المناقشة الى النظام
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                method="POST"
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 w-full"
              >
                <div>
                  <div className="relative">
                    <input
                      onChange={(e) => setFinally_Rate(e.target.value)}
                      type="number"
                      name="finally_rate"
                      className="w-full rounded-lg border-gray-200 p-4 pe-5 text-sm shadow-sm outline outline-1 outline-gray-200 transition-all focus:outline-gray-400"
                      placeholder="المناقشة النهائية"
                      autoComplete="off"
                      required
                      value={Finally_Rate}
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      onChange={(e) => setMid_Rate(e.target.value)}
                      type="number"
                      name="mid_rate"
                      className="w-full rounded-lg border-gray-200 p-4 pe-5 text-sm shadow-sm outline outline-1 outline-gray-200 transition-all focus:outline-gray-400"
                      placeholder="المناقشة النصفية"
                      autoComplete="off"
                      required
                      value={Mid_Rate}
                    />
                  </div>
                </div>

                <div className="w-full rounded-[4px] shadow-lg p-2 outline outline-1 outline-gray-200">
                  <div className="flex w-full h-7">
                    <input
                      onChange={(s) => dispatch(search(s.target.value))}
                      className="w-full h-full outline outline-1 outline-gray-200 rounded-[4px] px-4 text-sm"
                      type="text"
                      placeholder="بحث عن مستخدم"
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
                              onClick={() => setUser_id(e.id)}
                              checked={User_id == e.id}
                              type="radio"
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
                              onClick={() => setUser_id(e.id)}
                              checked={User_id == e.id}
                              type="radio"
                            />
                          </label>
                        ))}
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={(e) => SendRate()}
                  className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                >
                  ارسال
                </button>

                <Link
                  className="block text-center text-blue-500"
                  to={"/admin/rate"}
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
