import React from "react";
import NewProject from "../components/groups/NewProject";
import UserAuth from "../Middlewares/UserAuth";

export default function Group_New_Project_Page() {
  return (
    <>
      <UserAuth>
        <NewProject />
      </UserAuth>
    </>
  );
}
