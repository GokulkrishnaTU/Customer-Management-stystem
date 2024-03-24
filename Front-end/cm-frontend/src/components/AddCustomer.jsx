import React, { useState } from "react";
import axios from "axios";
import "../index.css";

/**
 * Component for adding a new customer
 * @param {Function} onAdd - Function to handle adding a new customer
 * @returns {JSX.Element} JSX element representing the add customer form
 */
const AddCustomer = ({ onAdd }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const { name, email, phone } = formData;

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !email || !phone) {
      console.error("Please fill in all fields.");
      return;
    }

    try {
      // Send POST request to add new customer
      const response = await axios.post("http://localhost:5000/customers", formData);
      // Call onAdd function to update customer list
      onAdd(response.data);
      // Clear form data after submission
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error adding customer: ", error);
    }
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="form-submit-btn">
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
