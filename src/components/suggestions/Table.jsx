import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetSuggestions } from "../../redux/reducers/SuggestionsSlice";

export default function Table() {
  const Store = useSelector((state) => state.suggs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSuggestions());
  }, []);

  return (
    <>
      <div className="mt-8 text-[8px] sm:text-[12px] md:text-sm lg:text-lg my-3 mb-8">
        <table className="w-full">
          <thead className="w-full bg-gray-100 outline outline-1 outline-gray-100">
            <tr className="h-6 sm:h-7 md:h-9 lg:h-12">
              <th className="w-1/6">موضوع الاقتراح</th>
              <th className="w-1/6">الاسم</th>
              <th className="w-1/6">عن المشروع</th>
              <th className="w-1/6">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {Store.filter
              ? Store?.filter.map((e) => (
                  <tr
                    key={e.id}
                    className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center"
                  >
                    <td>{e.suggs_name}</td>
                    <td>{e.leader}</td>
                    <td>{e.content.slice(0, 40)}</td>
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
                  </tr>
                ))
              : Store.data
              ? Store?.data.map((e) => (
                  <tr
                    key={e.id}
                    className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center"
                  >
                    <td>{e.suggs_name}</td>
                    <td>{e.leader}</td>
                    <td>{e.content.slice(0, 40)}</td>
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
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
}
