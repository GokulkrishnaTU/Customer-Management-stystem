import React from 'react';
import "../index.css"

/**
 * Component for deleting a customer
 * @param {string} customerId - The ID of the customer to be deleted
 * @param {Function} onDelete - Function to handle deleting a customer
 * @param {string} name - The name of the customer to be deleted
 * @returns {JSX.Element} JSX element representing the delete customer button
 */
const DeleteCustomer = ({ customerId, onDelete, name }) => {
  // Function to handle customer deletion
  const handleDelete = () => {
    // Display a confirmation prompt
    const confirmation = window.confirm(`Are you sure you want to delete ${name}?`);

    // If user confirms deletion, call onDelete function
    if (confirmation) {
      onDelete(customerId);
      // Show alert for successful deletion
      alert(`Customer "${name}" deleted successfully!`);
    }
  };

  return (
    <div>
      {/* Delete customer button */}
      <span onClick={handleDelete} className='delete-btn'>Delete</span>
    </div>
  );
};

export default DeleteCustomer;
