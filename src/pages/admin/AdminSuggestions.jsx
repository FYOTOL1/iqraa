import React from "react";
import Layout from "../../components/admin/Layout.jsx";
import Suggestions from "../../components/admin/suggestions/Suggestions.jsx";
import AdminAuth from "../../Middlewares/AdminAuth.jsx";

export default function AdminSuggestions() {
  return (
    <AdminAuth>
      <Layout>
        <Suggestions />
      </Layout>
    </AdminAuth>
  );
}
