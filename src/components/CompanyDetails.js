import React from 'react';
import { useParams } from 'react-router-dom';
import './CompanyDetails.css';

const CompanyDetails = () => {
    const { id } = useParams();
    const companies = [
        { id: 1, name: 'Company A', industry: 'Tech', location: 'New York', details: 'Details about Company A' },
        { id: 2, name: 'Company B', industry: 'Finance', location: 'San Francisco', details: 'Details about Company B' },
        { id: 3, name: 'Company C', industry: 'Healthcare', location: 'Boston', details: 'Details about Company C' },
        // Add more companies as needed
    ];

    const company = companies.find(company => company.id === parseInt(id));

    return (
        <div className="company-details">
            {company ? (
                <>
                    <h2>{company.name}</h2>
                    <p><strong>Industry:</strong> {company.industry}</p>
                    <p><strong>Location:</strong> {company.location}</p>
                    <p>{company.details}</p>
                </>
            ) : (
                <p>Company not found.</p>
            )}
        </div>
    );
};

export default CompanyDetails;
