import React from "react";
import NewProject from "../../components/admin/projects/NewProject";
import AdminAuth from "../../Middlewares/AdminAuth";

export default function NewProjectPage() {
  return (
    <>
      <AdminAuth>
        <NewProject />
      </AdminAuth>
    </>
  );
}
