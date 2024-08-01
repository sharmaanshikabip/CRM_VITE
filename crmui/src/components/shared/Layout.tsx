import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>Sidebar</div>
      <div>Topnav</div>
      <div>{<Outlet />}</div>
    </>
  );
}

export default Layout;
