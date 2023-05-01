import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = ({ label }: { label: string }) => {
  return (
    <>
      <Header label={label} />
      <Outlet />
    </>
  );
};
