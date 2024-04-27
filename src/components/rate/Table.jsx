import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetUsers } from "../../redux/reducers/UsersSlice";
import { PatchRate } from "../../redux/reducers/RateSlice";
import { PostNotification } from "../../redux/reducers/NotificationsSlice";

export default function Table() {
  const Store = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUsers());
  }, []);

  return (
    <>
      <div className="text-[8px] sm:text-[12px] md:text-sm lg:text-lg">
        <table className="w-full">
          <thead className="w-full bg-gray-100 outline outline-1 outline-gray-100">
            <tr className="h-7 md:h-10 lg:h-12">
              <th className="w-1/6">الاسم</th>
              <th className="w-1/6">تقييم نصفية</th>
              <th className="w-1/6">تقييم نهائية</th>
              <th className="w-1/6">المجموع</th>
              <th className="w-1/6">التاريخ</th>
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
                      <td>{e.username}</td>
                      <td>{e.mid_rate}</td>
                      <td className="max-w-10 overflow-hidden text-nowrap">
                        {e.finally_rate}
                      </td>
                      <td>{Math.floor(e.finally_rate + e.mid_rate)}</td>
                      <td>{new Date(e.date).toLocaleDateString()}</td>
                    </tr>
                  ) : null
                )
              : Store?.rates?.map((e, i) =>
                  e != null ? (
                    <tr
                      key={e.id}
                      className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center overflow-scroll lg:overflow-x-clip"
                    >
                      <td>{e.username}</td>
                      <td>{e.mid_rate}</td>
                      <td className="max-w-10 overflow-hidden text-nowrap">
                        {e.finally_rate}
                      </td>
                      <td>{Math.floor(e.finally_rate + e.mid_rate)}</td>
                      <td>{new Date(e.date).toLocaleDateString()}</td>
                    </tr>
                  ) : null
                )}
          </tbody>
        </table>
      </div>
    </>
  );
}
