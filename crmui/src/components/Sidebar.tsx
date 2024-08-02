import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="flex flex-col p-4">
          <button
            onClick={toggleMenu}
            className="text-white text-xl mb-4 flex items-center justify-between w-full"
          >
            CRM
            <span className={isOpen ? "transform rotate-90" : ""}>
              <i className="bi-chevron-right"></i>
            </span>
          </button>
          {isOpen && (
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center px-2 py-2 hover:bg-gray-700">
                  <span>Contacts</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-2 py-2 hover:bg-gray-700">
                  <span>Companies</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-2 py-2 hover:bg-gray-700">
                  <span>Deals</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-2 py-2 hover:bg-gray-700">
                  <span>Tickets</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-2 py-2 hover:bg-gray-700">
                  <span>Lists</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-2 py-2 hover:bg-gray-700">
                  <span>Inbox</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-2 py-2 hover:bg-gray-700">
                  <span>Calls</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-2 py-2 hover:bg-gray-700">
                  <span>Tasks</span>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <div className="flex flex-col space-y-4">
          <div className="bg-white shadow p-4 rounded">
            <h2 className="text-xl font-bold">Contact Details</h2>
            <p>Create Date: 7/26/2024 7:50 PM GMT+</p>
            <p>Lifecycle Stage: Lead</p>
            <p>Last Activity Date: --</p>
          </div>
          <div className="bg-white shadow p-4 rounded">
            <h2 className="text-xl font-bold">Recent Activities</h2>
            <p>No activities match the current filters.</p>
          </div>
          <div className="bg-white shadow p-4 rounded">
            <h2 className="text-xl font-bold">Associated Records</h2>
            <ul>
              <li>Contacts (0)</li>
              <li>Deals (0)</li>
              <li>Tickets (0)</li>
              <li>Payment Links (0)</li>
              <li>Companies (0)</li>
              <li>Subscriptions (0)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
