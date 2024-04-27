import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { GetSuggestions } from "../../../redux/reducers/SuggestionsSlice";
import Loading from "../../Loading";

export default function Suggestions() {
  const Store = useSelector((state) => state.suggs);
  const [Filter, setFilter] = useState(2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSuggestions());
  }, []);

  return (
    <>
      <Loading canLoading={Store.loading}>
        <header className="w-full px-2 sm:px-4 mt-3 sm:mt-0">
          <nav className="flex items-center gap-2 h-full w-full text-[10px] sm:text-sm">
            <button
              onClick={() => {
                setFilter(3);
                dispatch(GetSuggestions());
              }}
              className="flex items-center justify-center gap-2 bg-white shadow-sm rounded-lg h-[28px] sm:h-[33px] w-36 transition-all hover:bg-[#333] hover:text-white"
            >
              <p>تمت الموافقة</p>
              <i className="fa-regular fa-face-smile mt-[7px]"></i>
            </button>
            <button
              onClick={() => {
                setFilter(1);
                dispatch(GetSuggestions());
              }}
              className="flex items-center justify-center gap-2 bg-white shadow-sm rounded-lg h-[28px] sm:h-[33px] w-36 transition-all hover:bg-[#333] hover:text-white"
            >
              <p>تم الرفض</p>
              <i className="fa-regular fa-face-frown mt-[7px]"></i>
            </button>
            <button
              onClick={() => {
                setFilter(2);
                dispatch(GetSuggestions());
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
          {Store.data &&
            Store.data
              .filter((f) => f.status == Filter)
              .map((e, i) => (
                <Card
                  key={e.id}
                  e={e}
                  store={Store}
                  dispatch={dispatch}
                  name={e.leader}
                  date={e.date}
                  p={e.content}
                />
              ))}
        </div>
      </Loading>
    </>
  );
}
