import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Table() {
  const Store = useSelector((state) => state.PS);

  useEffect(() => {
    console.log(Store?.data);
  }, []);

  return (
    <>
      <div className="mt-8 text-[8px] sm:text-[12px] md:text-sm lg:text-lg">
        <table className="w-full">
          <thead className="w-full bg-gray-100 outline outline-1 outline-gray-100">
            <tr className="h-12">
              <th className="w-1/6">الاسم</th>
              <th className="w-1/6">حالة التسليم</th>
              <th className="w-1/6">حالته</th>
              <th className="w-1/6">تاريخ</th>
              <th className="w-1/6">عن</th>
              <th className="w-1/6">نوع</th>
            </tr>
          </thead>
          <tbody>
            {Store.filter.length
              ? Store?.filter?.map((e, i) => (
                  <tr
                    key={i}
                    className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center"
                  >
                    <td>{e.name}</td>
                    <td>
                      <p
                        className={`rounded-full ${
                          e.done ? "bg-blue-500" : "bg-red-500"
                        } w-fit mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-[1px] text-white`}
                      >
                        {e.done ? "لقد تم" : "لم يتم"}
                      </p>
                    </td>
                    <td>
                      <p
                        className={`rounded-full ${
                          e.new ? "bg-green-500" : "bg-blue-400"
                        } w-fit mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-[1px] text-white`}
                      >
                        {e.new ? "جديد" : "قديم"}
                      </p>
                    </td>
                    <td>{e.date}</td>
                    <td className="max-w-10 overflow-hidden text-nowrap">
                      {e.about}
                    </td>
                    <td>{e.type}</td>
                  </tr>
                ))
              : Store?.data?.map((e, i) => (
                  <tr
                    key={i}
                    className="h-8 sm:h-12 md:h-14 lg:h-16 outline outline-1 outline-gray-200 text-center"
                  >
                    <td>{e.name}</td>
                    <td>
                      <p
                        className={`rounded-full ${
                          e.done ? "bg-blue-500" : "bg-red-500"
                        } w-fit mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-[1px] text-white`}
                      >
                        {e.done ? "لقد تم" : "لم يتم"}
                      </p>
                    </td>
                    <td>
                      <p
                        className={`rounded-full ${
                          e.new ? "bg-green-500" : "bg-blue-400"
                        } w-fit mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-[1px] text-white`}
                      >
                        {e.new ? "جديد" : "قديم"}
                      </p>
                    </td>
                    <td>{e.date}</td>
                    <td className="max-w-10 overflow-hidden text-nowrap">
                      {e.about}
                    </td>
                    <td>{e.type}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
