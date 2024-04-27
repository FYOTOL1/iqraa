import React from "react";
import Header from "./Header";
import Table from "./Table";

export default function Groups() {
  return (
    <>
      <div className="my-3">
        <Header />
        <hr className="my-2 mx-5" />
        <Table />
      </div>
    </>
  );
}
