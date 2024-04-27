import React, { useState } from "react";
import Table from "./Table";
import Header from "./Header";

export default function Suggestions() {
  return (
    <div className="p-1 sm:p-2 md:p-3 lg:p-5 mt-3 lg:mt-1">
      <Header />
      <Table />
    </div>
  );
}
