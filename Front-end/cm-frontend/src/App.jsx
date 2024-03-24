// App.js

import React, { useState, useEffect } from "react";
import { textConst } from "./constants/textConstents";
import { apiConst } from "./constants/apiConstants";
import { getApi, handleDeleteCustomer } from "./controllers/apiService";
import Loader from "./components/loader";
import CustomerList from "./components/CustomerList";
import AddCustomer from "./components/AddCustomer";
import EditCustomer from "./components/EditCustomer";
import { MDBBtn } from 'mdb-react-ui-kit';

import "./App.css";

const App = () => {
  // State variables
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch customers data from API
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getApi(apiConst.ApifetchCustomers);
        setCustomers(data);
      } catch (error) {
        console.error("Error occurred while fetching customers:", error);
      } finally {
        setIsLoading(false); // Set loading state to false when data fetching is complete
      }
    };

    fetchCustomers();
  }, []);

  // Add new customer
  const handleAddCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  // Update existing customer
  const handleUpdateCustomer = (updatedCustomer) => {
    const updatedCustomers = customers.map((customer) =>
      customer._id === updatedCustomer._id ? updatedCustomer : customer
    );
    setCustomers(updatedCustomers); // Update the state with the updated customers data
    setEditingCustomer(null); // Reset editing state
  };



  

  // Delete a customer
  const onDelete = async (customerId) => {
    try {
      const updatedCustomers = await handleDeleteCustomer(customerId, customers, apiConst.ApiDeleteCustomers);
      setCustomers(updatedCustomers);
    } catch (error) {
      console.error("Error occurred while deleting customer:", error);
    }
  };

  // Handle edit button click
  const handleEditClick = (customer) => {
    setEditingCustomer(customer);
  };

  // Cancel edit mode
  const handleCancelEdit = () => {
    setEditingCustomer(null);
  };

  return (
    <div className="App">
      <div className="main-container">
        {isLoading ? (
          <Loader />
        ) : (
          <>

<div className="heading">
<h1 className="main-header">{textConst.cms}</h1>
</div>
            <AddCustomer onAdd={handleAddCustomer} />
            {editingCustomer ? (
              <>
                <EditCustomer
                  customer={editingCustomer}
                  onUpdate={handleUpdateCustomer}
                />
                <MDBBtn className='me-1' color='danger' onClick={handleCancelEdit}>
                  Cancel Edit
                </MDBBtn>
              </>
            ) : null}
            <CustomerList
              customers={customers}
              onEdit={handleEditClick}
              onDelete={onDelete}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
