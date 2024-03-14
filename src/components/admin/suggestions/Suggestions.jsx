import React, { useState } from "react";
import Card from "./Card";

export default function Suggestions() {
  const [Filter, setFilter] = useState(0);

  let suggs = [
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
      status: 0,
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
      status: 2,
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
      status: 1,
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
      status: 2,
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn wiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdn",
      status: 0,
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
      status: 2,
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
      status: 2,
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
      status: 1,
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
      status: 0,
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
      status: 0,
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
      status: 0,
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
      status: 0,
    },
  ];

  return (
    <>
      <header className="w-full px-2 sm:px-4 mt-10">
        <nav className="flex items-center gap-2 h-full w-full text-[10px] sm:text-sm">
          <button
            onClick={() => setFilter(1)}
            className="flex items-center justify-center gap-2 bg-white shadow-sm rounded-lg h-[28px] sm:h-[33px] w-36 transition-all hover:bg-[#333] hover:text-white"
          >
            <p>تمت الموافقة</p>
            <i class="fa-regular fa-face-smile mt-[7px]"></i>
          </button>
          <button
            onClick={() => setFilter(2)}
            className="flex items-center justify-center gap-2 bg-white shadow-sm rounded-lg h-[28px] sm:h-[33px] w-36 transition-all hover:bg-[#333] hover:text-white"
          >
            <p>تم الرفض</p>
            <i class="fa-regular fa-face-frown mt-[7px]"></i>
          </button>
          <button
            onClick={() => setFilter(0)}
            className="flex items-center justify-center gap-2 bg-white shadow-sm rounded-lg h-[28px] sm:h-[33px] w-36 transition-all hover:bg-[#333] hover:text-white"
          >
            <p>الانظار</p>
            <i class="fa-regular fa-clock mt-[7px]"></i>
          </button>
        </nav>
      </header>

      <hr className="mb-6 mt-2" />

      <div className="Suggestions lg:container mx-auto items-center gap-2 px-2 sm:px-4">
        {suggs &&
          suggs
            .filter((f) => f.status == Filter)
            .map((e) => <Card name={e.name} date={e.date} p={e.p} />)}
      </div>
    </>
  );
}
