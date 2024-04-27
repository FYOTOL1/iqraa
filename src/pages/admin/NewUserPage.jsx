import React from "react";
import NewUser from "../../components/admin/users/NewUser";
import AdminAuth from "../../Middlewares/AdminAuth";

export default function NewUserPage() {
  return (
    <>
      <AdminAuth>
        <NewUser />
      </AdminAuth>
    </>
  );
}
