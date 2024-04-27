import React from "react";
import Group from "../components/groups/Group";
import Layout from "../components/Layout/LAYOUT";
import UserAuth from "../Middlewares/UserAuth";

export default function GroupPage() {
  return (
    <>
      <UserAuth
        type={"user"}
        showMsg={true}
        msg={"لست ضمن اعضاء هذه المجموعة"}
        path={"/groups"}
      >
        <Layout>
          <Group />
        </Layout>
      </UserAuth>
    </>
  );
}
