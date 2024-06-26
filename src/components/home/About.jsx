import React from "react";

export default function About() {
  return (
    <>
      <div className="About_Us lg:container flex flex-row-reverse px-2 lg:p-0 mx-auto w-full mt-20 h-[350px] sm:h-[450px] md:h-[500px] outline outline-1 outline-gray-300 rounded-xl overflow-hidden">
        <div className="Right relative w-1/2 h-full overflow-hidden">
          <img
            loading="lazy"
            loading="lazy"
            className="object-cover w-full h-full"
            src="/team.jpg"
            alt="Error"
          />
        </div>
        <div className="Left w-1/2 h-full p-5 py-6">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#333]">
            من نحن
          </h1>
          <hr className="my-2" />
          <div className="w-full">
            <ul className="flex flex-col items-start mt-5">
              <li className="Li_About flex items-center flex-row-reverse gap-2 my-[3px] sm:my-1 md:my-2 lg:my-3 text-[12px] sm:text-sm lg:text-lg xl:text-xl text-gray-800">
                <p>الاكثر اتقانا لادارة المشاريع</p>
                <i className="fa-solid fa-check"></i>
              </li>
              <li className="Li_About flex items-center flex-row-reverse gap-2 my-[3px] sm:my-1 md:my-2 lg:my-3 text-[12px] sm:text-sm lg:text-lg xl:text-xl text-gray-800">
                <p>لدينا اكثر من 20 فرع في جميع انحاء العالم</p>
                <i className="fa-solid fa-check"></i>
              </li>
              <li className="Li_About flex items-center flex-row-reverse gap-2 my-[3px] sm:my-1 md:my-2 lg:my-3 text-[12px] sm:text-sm lg:text-lg xl:text-xl text-gray-800">
                <p>لدينا اكثر من 4000 موظف ذو كفاءة وخبرة عالية</p>
                <i className="fa-solid fa-check"></i>
              </li>
              <li className="Li_About flex items-center flex-row-reverse gap-2 my-[3px] sm:my-1 md:my-2 lg:my-3 text-[12px] sm:text-sm lg:text-lg xl:text-xl text-gray-800">
                <p>قمنا بتنفيذ وادارة اكثر من 12 الف من المشاريع</p>
                <i className="fa-solid fa-check"></i>
              </li>
              <li className="Li_About flex items-center flex-row-reverse gap-2 my-[3px] sm:my-1 md:my-2 lg:my-3 text-[12px] sm:text-sm lg:text-lg xl:text-xl text-gray-800">
                <p>لدينا خبرة تتعدى ال 40 عاما</p>
                <i className="fa-solid fa-check"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
