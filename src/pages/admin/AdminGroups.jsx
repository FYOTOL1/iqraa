import React from "react";
import AdminAuth from "../../Middlewares/AdminAuth";
import Groups from "../../components/admin/groups/Groups";
import Layout from "../../components/admin/Layout";

export default function AdminGroups() {
  return (
    <>
      <AdminAuth>
        <Layout>
          <Groups />
        </Layout>
      </AdminAuth>
    </>
  );
}
