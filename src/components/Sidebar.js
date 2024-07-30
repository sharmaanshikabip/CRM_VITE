import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import SubSidebar from './SubSidebar';

const Sidebar = () => {
    const [showSubSidebar, setShowSubSidebar] = useState(false);
    const subSidebarRef = useRef(null);

    const handleCRMClick = () => {
        setShowSubSidebar(!showSubSidebar);
    };

    const handleClickOutside = (event) => {
        if (subSidebarRef.current && !subSidebarRef.current.contains(event.target)) {
            setShowSubSidebar(false);
        }
    };

    useEffect(() => {
        if (showSubSidebar) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSubSidebar]);

    return (
        <div className="sidebar-container">
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li><a href="#" onClick={handleCRMClick}>CRM</a></li>
                    </ul>
                </nav>
            </aside>
            {showSubSidebar && <SubSidebar ref={subSidebarRef} />}
        </div>
    );
};

export default Sidebar;
