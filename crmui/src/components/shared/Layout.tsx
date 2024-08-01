import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Topnav from "../Topnav";

function Layout() {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div>
        <Topnav />
      </div>
      <div>{<Outlet />}</div>
    </>
  );
}

export default Layout;
