import React from "react";
import Table from "./Table";
import Header from "./Header";

export default function Rate() {
  return (
    <>
      <Header />
      <hr className="ms-4 my-2" />
      <div className="px-1 sm:px-2 md:px-4 mt-5">
        <Table />
      </div>
    </>
  );
}
