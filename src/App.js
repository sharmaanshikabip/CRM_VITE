import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Companies from './components/Companies';
import CompanyDetails from './components/CompanyDetails';
import Tasks from './components/Tasks';
import Contacts from './components/Contacts';
import Lists from './components/Lists';
import Tickets from './components/Tickets';
import Calls from './components/Calls';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Deals from './components/Deals';
import Inbox from './components/Inbox';
const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="content">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/companies" element={<Companies />} />
                        <Route path="/companies" element={<Contacts />} />
                        <Route path="/companies" element={<Tickets />} />
                        <Route path="/companies" element={<Deals />} />
                        <Route path="/companies" element={<Lists />} />
                        <Route path="/companies" element={<Inbox />} />
                        <Route path="/companies" element={<Calls />} />
                        <Route path="/companies" element={<Tasks />} />
                        <Route path="/companies/:id" element={<CompanyDetails />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
