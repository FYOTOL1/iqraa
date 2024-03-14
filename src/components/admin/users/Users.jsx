import React from "react";
import Table from "./Table";
import Layout from "../Layout";
import Header from "./Header";

export default function Users() {
  return (
    <>
      <Layout>
        <Header />
        <hr className="ms-4" />
        <div className="px-1 sm:px-2 md:px-4">
          <Table />
        </div>
      </Layout>
    </>
  );
}
