import React from "react";

export default function Suggestions() {
  let suggs = [
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn wiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdnwiejp0ewjonfowneodnfonfndfksnfkisdn",
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
    },
    {
      name: "Ahmed",
      date: new Date().toLocaleString(),
      p: "wiejp0ewjonfowneodnfonfndfksnfkisdn",
    },
  ];
  return (
    <>
      <div className="Suggestions lg:container mx-auto items-center gap-5 my-10 px-5 lg:px-0">
        {suggs &&
          suggs.map((e) => (
            <div className="bg-gray-50 outline outline-1 outline-gray-100 shadow-md p-3 h-36 rounded-md overflow-hidden">
              <div className="flex items-center justify-end gap-1 flex-row-reverse">
                {/* Name */}
                <p className="font-thin">{e.name}</p>
                <i className="fa-solid fa-user bg-white p-2 rounded-full outline outline-1 outline-gray-100"></i>
              </div>
              <p className="mt-2 text-gray-500 text-xs">{e.date}</p>
              <p className="text-sm mt-2">{e.p}</p>
            </div>
          ))}
      </div>
    </>
  );
}
