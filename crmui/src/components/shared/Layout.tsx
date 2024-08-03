import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Topnav from "../Topnav";
import ParentSidebar from "../ParentSidebar";
import ChildSidebar from "../ChildSidebar";

function Layout() {
  const [isChildSidebarVisible, setIsChildSidebarVisible] = useState(false);

  const toggleChildSidebar = () => {
    setIsChildSidebarVisible(!isChildSidebarVisible);
  };
  return (
    <>
      <div className="flex h-screen">
        <ParentSidebar toggleSidebar={toggleChildSidebar} />
        {isChildSidebarVisible && <ChildSidebar />}
      </div>
      <div>
        <Topnav />
      </div>
      <div>{<Outlet />}</div>
    </>
  );
}

export default Layout;
