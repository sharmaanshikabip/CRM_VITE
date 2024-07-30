import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <main className="main-content">
            <h2>Growth Plan | Software Developer</h2>
            <div className="section">
                <div className="box">
                    <h3>Section 1 - Box 1</h3>
                    <p>Dummy data for box 1 in section 1.</p>
                </div>
                <div className="box">
                    <h3>Section 1 - Box 2</h3>
                    <p>Dummy data for box 2 in section 1.</p>
                </div>
            </div>
            <div className="section">
                <div className="box">
                    <h3>Section 2 - Box 1</h3>
                    <p>Dummy data for box 1 in section 2.</p>
                </div>
                <div className="box">
                    <h3>Section 2 - Box 2</h3>
                    <p>Dummy data for box 2 in section 2.</p>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
