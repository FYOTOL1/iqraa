import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetGroups } from "../../redux/reducers/GroupsSlice.js";
import { Link } from "react-router-dom";

export default function Table() {
  const Store = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetGroups());
  }, []);

  return (
    <>
      <div className="text-[8px] sm:text-[12px] md:text-sm lg:text-lg">
        <table className="w-full">
          <thead className="w-full bg-gray-100 outline outline-1 outline-gray-100">
            <tr className="h-7 md:h-10 lg:h-12">
              <th className="w-1/6">اسم المجموعة</th>
              <th className="w-1/6">المشرف</th>
              <th className="w-1/6">مشاريع</th>
              <th className="w-1/6">اعضاء</th>
              <th className="w-1/6">الحالة</th>
              <th className="w-1/6">اخرى</th>
            </tr>
          </thead>
          <tbody>
            {Store?.filter?.length >= 1
              ? Store?.filter?.map((e) =>
                  e != null ? (
                    <tr
                      key={e?.id}
                      className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center overflow-scroll lg:overflow-x-clip"
                    >
                      <td>{e?.group_name}</td>
                      <td>{e?.leader_name}</td>
                      <td>{e?.projects?.length}</td>
                      <td>{e?.team?.length}</td>
                      <td>{new Date(e?.date).toLocaleDateString()}</td>
                      <td>
                        {e?.team?.some(
                          (s) => s?.id == localStorage.getItem("id")
                        ) ? (
                          <button
                            onClick={(f) =>
                              (location.pathname = `/groups/${e?.id}`)
                            }
                            className="px-2 bg-green-500 text-white rounded-[4px] transition-all hover:bg-green-400"
                          >
                            <i className="fa-solid fa-right-to-bracket"></i>
                          </button>
                        ) : (
                          <button className="px-2 bg-red-500 text-white rounded-[4px] transition-all hover:bg-red-400">
                            <i className="fa-solid fa-right-to-bracket"></i>
                          </button>
                        )}
                      </td>
                    </tr>
                  ) : null
                )
              : Store?.data &&
                Store.data.map((e) =>
                  e != null ? (
                    <tr
                      key={e?.id}
                      className={`h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center overflow-scroll lg:overflow-x-clip ${
                        e?.status == 1 && "opacity-60"
                      }`}
                    >
                      <td>{e?.group_name}</td>
                      <td>{e?.leader_name}</td>
                      <td>{e?.projects?.length}</td>
                      <td>{e?.team?.length}</td>
                      <td>
                        <p
                          className={`w-4 h-4 ${
                            e.status == 1
                              ? "bg-red-500"
                              : e.status == 2
                              ? "bg-yellow-400"
                              : e.status == 3
                              ? "bg-green-500"
                              : "bg-black"
                          } rounded-full mx-auto`}
                        ></p>
                      </td>
                      <td>
                        {e.status == 3 ? (
                          e?.team?.some(
                            (s) => s?.user_id == localStorage.getItem("id")
                          ) ? (
                            <Link
                              to={`/groups/${e?.id}`}
                              className="px-2 bg-green-500 text-white rounded-[4px] transition-all hover:bg-green-400"
                            >
                              <i className="fa-solid fa-right-to-bracket"></i>
                            </Link>
                          ) : (
                            <button className="px-2 bg-red-500 text-white rounded-[4px] transition-all cursor-not-allowed">
                              <i className="fa-solid fa-right-to-bracket"></i>
                            </button>
                          )
                        ) : (
                          <button className="px-2 bg-red-500 text-white rounded-[4px] transition-all cursor-not-allowed">
                            <i className="fa-solid fa-right-to-bracket"></i>
                          </button>
                        )}
                      </td>
                    </tr>
                  ) : null
                )}
          </tbody>
        </table>
      </div>
    </>
  );
}
