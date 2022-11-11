import React from "react";
import { Navbar } from "./Navbar";

export const LayoutWithNavbar = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
