import React, { useState } from "react";

const ParentSidebar = ({ toggleSidebar }) => {
  return (
    <div className="w-20 bg-gray-700 text-white flex flex-col items-center py-4">
      <button
        onClick={toggleSidebar}
        className="text-white text-xl mb-4 flex items-center justify-between w-full"
      >
        CRM
      </button>
    </div>
  );
};

export default ParentSidebar;
