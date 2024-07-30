import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Companies from './components/Companies';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
