import React from 'react';
import './CRMPage.css'
const CRMPage = () => {
  return (
    <div className="container-fluid d-flex">
      
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse sidebarheight">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  CRM
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Companies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tickets
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom width-adjust-border">
            <h1 className="h2">Dashboard</h1>
          </div>
          <div className="d-flex">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Record Highlights</h2>
                <p>Create Date: 07/26/2024 7:50 PM</p>
                <p>Lifecycle Stage: Lead</p>
              </div>
              <div className="col-md-6">
                <h2>Recent Activities</h2>
                <p>No activities match the current filters.</p>
              </div>
            </div>

            
          </div>
          <div className="container">
          <div className="row">
              <div className="col-md-4">
                <button className="btn btn-primary">Add Contact</button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-secondary">Add Deal</button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-success">Add Ticket</button>
              </div>
            </div>
          </div>
          </div>
         
        </main>
      </div>
    </div>
  );
}

export default CRMPage;
