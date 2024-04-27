import React from "react";
import { useSelector } from "react-redux";
import Users from "../../components/admin/users/Users";
import Loading from "../../components/Loading";
import AdminAuth from "../../Middlewares/AdminAuth";

export default function AdminUsers() {
  const Store = useSelector((state) => state.users);

  return (
    <>
      <AdminAuth>
        <Loading canLoading={Store.Loading}>
          <Users />
        </Loading>
      </AdminAuth>
    </>
  );
}
