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
                <div className="main-company-details">
                <div className="company-details-1">
                 <h2>{company.name}</h2>
                    <p><strong>Industry:</strong> {company.industry}</p>
                    <p><strong>Location:</strong> {company.location}</p>
                    <p>{company.details}</p>
                 </div>
                 <div className="section-details company-details-2 ">
                    <h2 className="company-heading-2">Overview</h2>
                    <div className="box-details">
                        <h3>Data Highlights</h3>
                        <p>Dummy data for box 1 in section 1.</p>
                    </div>
                    <div className="box-details">
                        <h3>Recent Activities</h3>
                        <p>Dummy data for box 2 in section 1.</p>
                    </div>
                    <div className="box-details">
                        <h3>Contacts</h3>
                        <p>Dummy data for box 2 in section 1.</p>
                    </div>
                    <div className="box-details">
                        <h3>Companies</h3>
                        <p>Dummy data for box 2 in section 1.</p>
                    </div>
                   
                   </div>
                   <div className="company-details-3">
                   <div className="box-details-3">
                        <h3>Data Highlights</h3>
                        <p>Dummy data for box 1 in section 1.</p>
                    </div>
                    <div className="box-details-3">
                        <h3>Data Highlights</h3>
                        <p>Dummy data for box 1 in section 1.</p>
                    </div>
                    <div className="box-details-3">
                        <h3>Data Highlights</h3>
                        <p>Dummy data for box 1 in section 1.</p>
                    </div>
                    <div className="box-details-3">
                        <h3>Data Highlights</h3>
                        <p>Dummy data for box 1 in section 1.</p>
                    </div>
                    <div className="box-details-3">
                        <h3>Data Highlights</h3>
                        <p>Dummy data for box 1 in section 1.</p>
                    </div>
                   </div>
                </div>
                 
                  
                  
                </>
            ) : (
                <p>Company not found.</p>
            )}
        </div>
    );
};

export default CompanyDetails;
