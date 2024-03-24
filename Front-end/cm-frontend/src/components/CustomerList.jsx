import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody ,MDBBtn} from 'mdb-react-ui-kit';
import DeleteCustomer from './DeleteCustomer';
import '../index.css'; // Import CSS file for styling

/**
 * Component to display a list of customers
 * @param {Array} customers - An array of customer objects
 * @param {Function} onEdit - Function to handle editing a customer
 * @param {Function} onDelete - Function to handle deleting a customer
 * @returns {JSX.Element} JSX element representing the customer list component
 */
const CustomerList = ({ customers, onEdit, onDelete }) => {
  return (
    <div className='customer-list'>
      <h2>Customer List</h2>
      <div className="table-responsive">
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {customers.map(customer => (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>
                  <div className="buttons">
                    {/* Edit button */}
                    <MDBBtn color='info' onClick={() => onEdit(customer)}>
                      Edit
                    </MDBBtn>
                    {/* Delete button */}
                    <MDBBtn className='me-1' color='danger'>
                      <DeleteCustomer customerId={customer._id} onDelete={onDelete} name={customer.name} />
                    </MDBBtn>
                  </div>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
};

export default CustomerList;
