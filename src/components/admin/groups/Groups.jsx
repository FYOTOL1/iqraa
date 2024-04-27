import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { GetGroups } from "../../../redux/reducers/GroupsSlice";
import Loading from "../../Loading";

export default function Groups() {
  const Store = useSelector((state) => state.groups);
  const [Filter, setFilter] = useState(2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetGroups());
  }, []);

  return (
    <>
      <Loading canLoading={Store.loading}>
        <header className="w-full sm:px-4 mt-3 sm:mt-0 p-3">
          <nav className="flex items-center gap-2 h-full w-full text-[10px] sm:text-sm">
            <button
              onClick={() => {
                setFilter(3);
                dispatch(GetGroups());
              }}
              className="flex items-center justify-center gap-2 bg-white shadow-sm rounded-lg h-[28px] sm:h-[33px] w-36 transition-all hover:bg-[#333] hover:text-white"
            >
              <p>تمت الموافقة</p>
              <i className="fa-regular fa-face-smile mt-[7px]"></i>
            </button>
            <button
              onClick={() => {
                setFilter(1);
                dispatch(GetGroups());
              }}
              className="flex items-center justify-center gap-2 bg-white shadow-sm rounded-lg h-[28px] sm:h-[33px] w-36 transition-all hover:bg-[#333] hover:text-white"
            >
              <p>تم الرفض</p>
              <i className="fa-regular fa-face-frown mt-[7px]"></i>
            </button>
            <button
              onClick={() => {
                setFilter(2);
                dispatch(GetGroups());
              }}
              className="flex items-center justify-center gap-2 bg-white shadow-sm rounded-lg h-[28px] sm:h-[33px] w-36 transition-all hover:bg-[#333] hover:text-white"
            >
              <p>الانظار</p>
              <i className="fa-regular fa-clock mt-[7px]"></i>
            </button>
          </nav>
        </header>

        <hr className="mb-6 mt-2" />

        <div className="Suggestions lg:container mx-auto items-center gap-2 px-2 sm:px-4">
          {Store?.data &&
            Store?.data
              .filter((f) => f.status == Filter)
              .map((e) => (
                <Card
                  key={e?.id}
                  group_name={e?.group_name}
                  leader_name={e?.leader_name}
                  dispatch={dispatch}
                  date={e.date}
                  e={e}
                />
              ))}
        </div>
      </Loading>
    </>
  );
}
