import React from "react";
import Navbar from "./Navbar.jsx";
import Table from "./Table.jsx";

export default function Projects() {
  return (
    <>
      <div className="lg:container px-1 md:px-4 mt-2 md:mt-0 mx-auto">
        <Navbar />
        <Table />
      </div>
    </>
  );
}
