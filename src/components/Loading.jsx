import React from "react";

export default function Loading({ children, canLoading }) {
  return <>{!canLoading ? children : ""}</>;
}
