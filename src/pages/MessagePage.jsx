import React from "react";
import { Link } from "react-router-dom";

export default function MessagePage({
  msg = "لم يتم العثور على هذه الصفحة404",
  color = "text-gray-500",
  pathName = "Home",
  path = "/",
}) {
  return (
    <div className="flex items-center justify-center flex-col h-screen text-center">
      <h1 className={`text-3xl ${color}`}>{msg}</h1>
      <Link
        className="mt-10 text-xl text-blue-500 transition-all hover:text-blue-400 cursor-pointer"
        to={path}
      >
        العودة الى {pathName}
      </Link>
    </div>
  );
}
