import React, { useEffect } from 'react';
import { Grid } from 'gridjs-react';
import { useNavigate } from 'react-router-dom';
import { html } from 'gridjs';

// Components
import { PageBreadcrumb } from '../../../components';

// Dummy data
import { dataTableRecords } from './data';

const DataTableDeals = () => {
  const navigate = useNavigate();

  // Format data to include ID as the first column
  const formattedData = dataTableRecords.map(record => [
    record.id,
    record.companyName,
	record.companyDetailLink,
    record.companyOwner,
    record.createDate,
    record.phoneNumber,
    record.lastActivityDate,
  ]);

  // Handle navigation based on cell click
  const handleCellClick = (id: any) => {
    navigate(`/company/${id}`);
  };

  useEffect(() => {
    const grid = document.querySelector('.gridjs-container');
    if (grid) {
      grid.addEventListener('click', function(event) {
        if (event.target.tagName === 'TD' && event.target.cellIndex === 1) {
          const rowElement = event.target.closest('TR');
          if (rowElement) {
            const id = rowElement.children[0].textContent;
            if (id) {
              handleCellClick(id);
            }
          }
        }
      });
    }
  }, []);

  return (
    <>
      <PageBreadcrumb title="Data Table" subName="Table" />
      <div className="flex flex-col gap-6">
        <div className="card">
          <div className="card-header">
            <div className="flex justify-between items-center">
              {/* Any additional header content */}
            </div>
          </div>
          <div className="p-6">
            <Grid
              columns={[
                { name: 'ID', hidden: true },
                {
                  name: 'Company Name',
                  formatter: (cell: any) => html(
                    `<span class="company-name">${cell}</span>`
                  ),
                },
				'Company Detail link',
                'Company Owner',
                'Create Date',
                'Phone Number',
                'Last Activity Date',
              ]}
              data={formattedData}
              sort={true}
              search={true}
              pagination={{ enabled: true, limit: 5 }}
              style={{
                td: {
                  cursor: 'pointer'
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTableDeals;