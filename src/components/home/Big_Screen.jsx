import React from "react";
import { Link } from "react-router-dom";

export default function Big_Screen() {
  return (
    <div className="Big_Screen relative w-full h-[500px]">
      <div className="lg:container mx-auto h-full">
        <img
          loading="lazy"
          loading="lazy"
          className="object-cover brightness-50 h-full w-full"
          src="/leader.jpg"
        />
        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          <h1 className="text-xl sm:text-xl md:text-3xl lg:text-5xl text-white text-center">
            ادارة مشاريع
            <span className="text-blue-500 font-bold"> التخرج </span>
          </h1>
          {!localStorage.getItem("id") ? (
            <Link
              className="flex items-baseline flex-row-reverse gap-2 mt-5 md:mt-10 text-center bg-white py-1 md:py-2 w-fit px-6 sm:px-10 md:px-15 lg:px-20 mx-auto rounded-full transition-all hover:bg-black hover:text-white"
              to={"/login"}
            >
              <p>ابدأ</p>
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
