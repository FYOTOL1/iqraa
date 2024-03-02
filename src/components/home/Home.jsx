import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="Big_Screen relative w-full h-[500px]">
        <div className="lg:container mx-auto h-full">
          <img
            className="object-center brightness-50 h-full w-full"
            src="/leader.jpg"
          />
          <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <h1 className="text-5xl text-white">
              جامعة <span className="text-blue-500 font-bold"> اقرا </span>{" "}
              للعلوم و التكنولوجيا
            </h1>
            <Link
              className="flex items-center flex-row-reverse gap-2 mt-10 text-center bg-white py-2 w-fit px-20 mx-auto rounded-full transition-all hover:bg-black hover:text-white"
              to={"https://iqraa.edu.ye/"}
            >
              <p>انتقال</p>
              <i class="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
