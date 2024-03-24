import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import "../index.css";
import { putApi } from "../controllers/apiService";

/**
 * Component for editing a customer
 * @param {Object} customer - The customer object to be edited
 * @param {Function} onUpdate - Function to handle updating a customer
 * @returns {JSX.Element} JSX element representing the edit customer form
 */
const EditCustomer = ({ customer, onUpdate }) => {
  // State variables to manage form data
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send PUT request to update customer data

      const response = await putApi(
        `http://localhost:5000/customers/${customer._id}`,
        {
          name,
          email,
          phone,
        }
      );
      // Call the onUpdate function with the updated customer data
      onUpdate(response.data);
    } catch (error) {
      console.error("Error updating customer: ", error);
    }
  };

  return (
    <div className="edit-customer">
      <h2>Edit Customer</h2>
      <div className="edit-section">
        {/* Input fields for editing customer details */}
        <input
          type="text"
          placeholder="Name"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          className="input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        {/* Update button */}
        <MDBBtn className="me-1" color="success" onClick={handleSubmit}>
          Update
        </MDBBtn>
      </div>
    </div>
  );
};

export default EditCustomer;
