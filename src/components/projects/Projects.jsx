import React from "react";
import Navbar from "./Navbar.jsx";
import Table from "./Table.jsx";

export default function Projects() {
  return (
    <>
      <div className="lg:container px-1 lg:px-0 my-4 md:my-10 mx-auto">
        <Navbar />
        <Table />
      </div>
    </>
  );
}
