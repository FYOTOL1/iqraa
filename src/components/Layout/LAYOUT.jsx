import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function LAYOUT({ children }) {
  return (
    <div className="w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
