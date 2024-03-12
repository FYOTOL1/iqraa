import React, { useState } from "react";

export default function Rate() {
  const [suggs, setSuggs] = useState([
    {
      id: 1,
      name: "Ahmed",
      date: new Date().toLocaleString(),
      rate: 5,
      path: "/team.jpg",
      my_rate: 0,
    },
    {
      id: 2,
      name: "Khalid",
      date: new Date().toLocaleString(),
      rate: 2,
      path: "/team.jpg",
      my_rate: 0,
    },
    {
      id: 3,
      name: "Mohammed",
      date: new Date().toLocaleString(),
      rate: 4.4,
      path: "/team.jpg",
      my_rate: 0,
    },
    {
      id: 4,
      name: "Jasem",
      date: new Date().toLocaleString(),
      rate: 2.5,
      path: "/team.jpg",
      my_rate: 0,
    },
    {
      id: 5,
      name: "Mahmoud",
      date: new Date().toLocaleString(),
      rate: 1,
      path: "/team.jpg",
      my_rate: 0,
    },
    {
      id: 6,
      name: "Yaser",
      date: new Date().toLocaleString(),
      rate: 5,
      path: "/team.jpg",
      my_rate: 0,
    },
    {
      id: 7,
      name: "Shady",
      date: new Date().toLocaleString(),
      rate: 3,
      path: "/team.jpg",
      my_rate: 0,
    },
    {
      id: 8,
      name: "Aia",
      date: new Date().toLocaleString(),
      rate: 4.5,
      path: "/team.jpg",
      my_rate: 0,
    },
    {
      id: 9,
      name: "Alaa",
      date: new Date().toLocaleString(),
      rate: 4,
      path: "/team.jpg",
      my_rate: 0,
    },
  ]);

  return (
    <>
      <div className="Suggestions lg:container mx-auto items-center gap-5 my-10 px-5 lg:px-0">
        {suggs.map((e) => (
          <div
            key={e.id}
            className="bg-gray-50 outline outline-1 outline-gray-100 shadow-md p-3 h-28 rounded-md overflow-hidden"
          >
            <div className="flex items-center justify-end gap-1 flex-row-reverse">
              <p className="font-thin">{e.name}</p>
              <img
                className="h-7 w-7 object-cover rounded-full"
                src="/team.jpg"
                alt="Avatar"
              />
            </div>
            <p className="mt-2 text-gray-500 text-xs">{e.date}</p>
            <div className="flex items-center gap-1 text-sm mt-2 text-yellow-500">
              <p>{e.rate}</p>
              <i className="fa-solid fa-star text-yellow-400 transition-all"></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
