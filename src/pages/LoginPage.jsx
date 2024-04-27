import React from "react";
import Login from "../components/auth/Login.jsx";
import LoginAuth from "../Middlewares/LoginAuth.jsx";

export default function LoginPage() {
  return (
    <>
      <LoginAuth>
        <Login />
      </LoginAuth>
    </>
  );
}
