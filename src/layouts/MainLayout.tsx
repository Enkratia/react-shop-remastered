import React from "react";
import { HeaderTop, HeaderMain } from "../components";

// import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <HeaderTop />
      <HeaderMain />
    </>
  );
};

export default MainLayout;
