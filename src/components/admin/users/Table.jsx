import React from "react";

export default function Table() {
  let users = [
    { id: 1, name: "Ahmed", age: 18, country: "Egypt", year: 1, projects: 3 },
    { id: 2, name: "Khalid", age: 22, country: "KSA", year: 2, projects: 7 },
    {
      id: 3,
      name: "Mohammed",
      age: 23,
      country: "Yamen",
      year: 4,
      projects: 19,
    },
    { id: 4, name: "Yaser", age: 25, country: "Yamen", year: 6, projects: 23 },
    { id: 1, name: "Ahmed", age: 18, country: "Egypt", year: 1, projects: 3 },
    { id: 2, name: "Khalid", age: 22, country: "KSA", year: 2, projects: 7 },
    {
      id: 3,
      name: "Mohammed",
      age: 23,
      country: "Yamen",
      year: 4,
      projects: 19,
    },
    { id: 4, name: "Yaser", age: 25, country: "Yamen", year: 6, projects: 23 },
    { id: 1, name: "Ahmed", age: 18, country: "Egypt", year: 1, projects: 3 },
    { id: 2, name: "Khalid", age: 22, country: "KSA", year: 2, projects: 7 },
    {
      id: 3,
      name: "Mohammed",
      age: 23,
      country: "Yamen",
      year: 4,
      projects: 19,
    },
    { id: 4, name: "Yaser", age: 25, country: "Yamen", year: 6, projects: 23 },
    { id: 1, name: "Ahmed", age: 18, country: "Egypt", year: 1, projects: 3 },
    { id: 2, name: "Khalid", age: 22, country: "KSA", year: 2, projects: 7 },
    {
      id: 3,
      name: "Mohammed",
      age: 23,
      country: "Yamen",
      year: 4,
      projects: 19,
    },
    { id: 4, name: "Yaser", age: 25, country: "Yamen", year: 6, projects: 23 },
    { id: 1, name: "Ahmed", age: 18, country: "Egypt", year: 1, projects: 3 },
    { id: 2, name: "Khalid", age: 22, country: "KSA", year: 2, projects: 7 },
    {
      id: 3,
      name: "Mohammed",
      age: 23,
      country: "Yamen",
      year: 4,
      projects: 19,
    },
    { id: 4, name: "Yaser", age: 25, country: "Yamen", year: 6, projects: 23 },
    { id: 1, name: "Ahmed", age: 18, country: "Egypt", year: 1, projects: 3 },
    { id: 2, name: "Khalid", age: 22, country: "KSA", year: 2, projects: 7 },
    {
      id: 3,
      name: "Mohammed",
      age: 23,
      country: "Yamen",
      year: 4,
      projects: 19,
    },
    { id: 4, name: "Yaser", age: 25, country: "Yamen", year: 6, projects: 23 },
    { id: 1, name: "Ahmed", age: 18, country: "Egypt", year: 1, projects: 3 },
    { id: 2, name: "Khalid", age: 22, country: "KSA", year: 2, projects: 7 },
    {
      id: 3,
      name: "Mohammed",
      age: 23,
      country: "Yamen",
      year: 4,
      projects: 19,
    },
    { id: 4, name: "Yaser", age: 25, country: "Yamen", year: 6, projects: 23 },
  ];

  return (
    <>
      <table className="w-full text-center mt-14 bg-white text-[10px] sm:text-xs md:text-sm text-lg">
        <thead className="h-14 outline outline-1 outline-gray-100 rounded-t-md">
          <tr>
            <th>ID</th>
            <th>الاسم</th>
            <th>العمر</th>
            <th>البلد</th>
            <th>السنة</th>
            <th>المشاريع</th>
            <th>اخرى</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((e) => (
              <tr className="h-12">
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.country}</td>
                <td>{e.year}</td>
                <td>{e.projects}</td>
                <td>
                  <i className="fa-solid fa-ellipsis p-2 rounded-full transition-all hover:bg-gray-100 cursor-pointer"></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
