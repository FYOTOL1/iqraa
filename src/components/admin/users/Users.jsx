import React from "react";
import Table from "./Table";
import Layout from "../Layout";

export default function Users() {
  return (
    <>
      <Layout>
        <div className="px-1 sm:px-2 md:px-4">
          <Table />
        </div>
      </Layout>
    </>
  );
}
