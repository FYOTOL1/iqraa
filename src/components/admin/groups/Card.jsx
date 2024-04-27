import React from "react";
import { PatchGroup } from "../../../redux/reducers/GroupsSlice";

export default function Card({ group_name, date, leader_name, dispatch, e }) {
  const Accept = () => {
    dispatch(PatchGroup({ id: e.id, status: 3 }));
  };

  const unAccept = () => {
    dispatch(PatchGroup({ id: e.id, status: 1 }));
  };

  return (
    <>
      <div className="flex justify-between flex-col bg-white outline outline-1 outline-gray-100 shadow-md p-3 h-[150px] rounded-sm overflow-hidden">
        <div className="flex items-center justify-end gap-1 flex-row-reverse">
          {/* Name */}
          <p className="font-thin">{group_name}</p>
          <i className="fa-solid fa-user bg-white p-2 rounded-full outline outline-1 outline-gray-100"></i>
        </div>
        <p className="text-gray-500 text-xs">{date}</p>
        <p className="text-sm">{leader_name}</p>
        {/* Actions */}
        {e.status == 1 ? (
          <button
            disabled
            className="py-[2px] w-full bg-red-500 text-white rounded-full opacity-75"
          >
            مرفوض
          </button>
        ) : e.status == 2 ? (
          <div className="flex items-center flex-row-reverse gap-2">
            <button
              onClick={(e) => Accept()}
              className="py-[2px] w-1/2 bg-[#40a396] text-white rounded-full transition-all hover:opacity-75"
            >
              قبول
            </button>
            <button
              onClick={(e) => unAccept()}
              className="py-[2px] w-1/2 bg-white text-black border border-gray-400 rounded-full transition-all hover:opacity-75"
            >
              رفض
            </button>
          </div>
        ) : e.status == 3 ? (
          <button
            disabled
            className="py-[2px] w-full bg-[#40a396] text-white rounded-full opacity-75"
          >
            مقبول
          </button>
        ) : null}
      </div>
    </>
  );
}
