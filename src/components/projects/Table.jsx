import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetProjects } from "../../redux/reducers/ProjectsSlice";

export default function Table() {
  const Store = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProjects());
  }, []);

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
            </tr>
          </thead>
          <tbody>
            {Store && Store.filter
              ? Store?.filter?.map((e, i) => (
                  <tr
                    key={i}
                    className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center"
                  >
                    <td>{e.project_name}</td>
                    <td>
                      <p
                        className={`rounded-full ${
                          e.done ? "bg-blue-500" : "bg-red-500"
                        } w-fit mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-[1px] text-white`}
                      >
                        {e.done ? "لقد تم" : "لم يتم"}
                      </p>
                    </td>
                    <td>{new Date(e.date).toLocaleDateString()}</td>
                    <td className="max-w-10 overflow-hidden text-nowrap">
                      {e.subject}
                    </td>
                  </tr>
                ))
              : Store &&
                Store.data &&
                Store?.data?.map((e, i) => (
                  <tr
                    key={i}
                    className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center"
                  >
                    <td>{e.project_name}</td>
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
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
