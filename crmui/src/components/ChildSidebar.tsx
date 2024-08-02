import React from "react";
import sidebarData from "./sidebarData.json"; // Replace with the actual path to your JSON file

const ChildSidebar = () => {
  return (
    <div className="w-64 bg-gray-700 text-white flex flex-col">
      <div className="flex flex-col p-4">
        <ul className="space-y-2">
        {sidebarData.map((item) => (
          <li key={item.name}>
            <a href={item.link} className="flex items-center px-2 py-2 hover:bg-gray-700">
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ChildSidebar;
