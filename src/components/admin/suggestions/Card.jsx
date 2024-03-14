import React from "react";

export default function Card({ name, date, p }) {
  return (
    <>
      <div className="flex justify-between flex-col bg-white outline outline-1 outline-gray-100 shadow-md p-3 h-[150px] rounded-sm overflow-hidden">
        <div className="flex items-center justify-end gap-1 flex-row-reverse">
          {/* Name */}
          <p className="font-thin">{name}</p>
          <i className="fa-solid fa-user bg-white p-2 rounded-full outline outline-1 outline-gray-100"></i>
        </div>
        <p className="text-gray-500 text-xs">{date}</p>
        <p className="text-sm">{p}</p>
        {/* Actions */}
        <div className="flex items-center flex-row-reverse gap-2">
          <button className="py-[2px] w-1/2 bg-[#40a396] text-white rounded-full transition-all hover:opacity-75">
            قبول
          </button>
          <button className="py-[2px] w-1/2 bg-white text-black border border-gray-400 rounded-full transition-all hover:opacity-75">
            رفض
          </button>
        </div>
      </div>
    </>
  );
}
