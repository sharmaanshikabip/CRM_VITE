import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './SubSidebar.css';

const SubSidebar = forwardRef((props, ref) => {
    return (
        <aside className="sub-sidebar" ref={ref}>
            <nav>
                <ul>
                    <li><Link to="/companies">Companies</Link></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Deals</a></li>
                    <li><a href="#">Tickets</a></li>
                    <li><a href="#">Lists</a></li>
                    <li><a href="#">Inbox</a></li>
                    <li><a href="#">Calls</a></li>
                    <li><a href="#">Tasks</a></li>
                </ul>
            </nav>
        </aside>
    );
});

export default SubSidebar;
