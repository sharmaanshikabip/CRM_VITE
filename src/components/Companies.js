import React, { useState } from 'react';
import './Companies.css';

const Companies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [companies] = useState([
        { id: 1, name: 'Company A', industry: 'Tech', location: 'New York' },
        { id: 2, name: 'Company B', industry: 'Finance', location: 'San Francisco' },
        { id: 3, name: 'Company C', industry: 'Healthcare', location: 'Boston' },
        // Add more companies as needed
    ]);

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="companies">
            <h2>Companies</h2>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Industry</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCompanies.map((company) => (
                        <tr key={company.id}>
                            <td>{company.id}</td>
                            <td>{company.name}</td>
                            <td>{company.industry}</td>
                            <td>{company.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Companies;
