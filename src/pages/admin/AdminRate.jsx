import React from "react";
import Rate from "../../components/admin/rate/Rate";
import Layout from "../../components/admin/Layout";
import AdminAuth from "../../Middlewares/AdminAuth";

export default function AdminRate() {
  return (
    <>
      <AdminAuth>
        <Layout>
          <Rate />
        </Layout>
      </AdminAuth>
    </>
  );
}
