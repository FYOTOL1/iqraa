import React from "react";
import NewGroup from "../components/groups/NewGroup";
import UserAuth from "../Middlewares/UserAuth";

export default function NewGroupPage() {
  return (
    <>
      <UserAuth
        showMsg={true}
        msg={"عليك تسجيل الدخول اولا للوصول لهذه الصفحة"}
      >
        <NewGroup />
      </UserAuth>
    </>
  );
}
