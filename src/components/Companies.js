import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Companies.css';

const Companies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [companies] = useState([
        { id: 1, name: 'Company A', industry: 'Tech', location: 'New York' },
        { id: 2, name: 'Company B', industry: 'Finance', location: 'San Francisco' },
        { id: 3, name: 'Company C', industry: 'Healthcare', location: 'Boston' },
        // Add more companies as needed
    ]);

    const navigate = useNavigate();

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCompanyClick = (id) => {
        navigate(`/companies/${id}`);
    };

    return (
        <div className="companies">
            <div className="companies-main">
            <h2> All Companies</h2>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
            <table className="companies-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Company Name</th>
                        <th>Company Owner</th>
                        <th>Create Date</th>
                        <th>Phone Number</th>
                        <th>Last Activity Date</th>

                    </tr>
                </thead>
                <tbody>
                    {filteredCompanies.map((company) => (
                        <tr key={company.id} >
                            <td><input type='checkbox'></input></td>
                            <td onClick={() => handleCompanyClick(company.id)}>{company.name} </td>
                            <td>{company.industry}</td>
                            <td>{company.location}</td>
                            <td>{company.industry}</td>
                            <td>{company.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            
        </div>
    );
};

export default Companies;
