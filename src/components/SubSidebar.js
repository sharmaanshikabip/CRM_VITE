import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './SubSidebar.css';

const SubSidebar = forwardRef((props, ref) => {
    return (
        <aside className="sub-sidebar" ref={ref}>
            <nav>
                <ul>
                    <li><Link to="/companies">Companies</Link></li>
                    <li><Link to="/companies">Contacts</Link></li>
                    <li><Link to="/companies">Tickets</Link></li>
                    <li><Link to="/companies">Deals</Link></li>
                    <li><Link to="/companies">Lists</Link></li>
                    <li><Link to="/companies">Inbox</Link></li>
                    <li><Link to="/companies">Calls</Link></li>
                    <li><Link to="/companies">Tasks</Link></li>
                </ul>
            </nav>
        </aside>
    );
});

export default SubSidebar;
