import axios from 'axios';

/**
 * Function to perform GET request to API endpoint
 * @param {string} apiUrl - The URL of the API endpoint to fetch data from
 * @returns {Promise} Promise object representing the data retrieved from the API
 */
export const getApi = async (apiUrl) => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(`Error in GET request to ${apiUrl}`, error);
  }
};

/**
 * Function to handle deleting a customer from the API
 * @param {string} customerId - The ID of the customer to be deleted
 * @param {Array} customers - The array of customer objects
 * @param {string} deleteApi - The URL of the API endpoint for deleting a customer
 * @returns {Array} Updated array of customers after deletion
 */
export const handleDeleteCustomer = async (customerId, customers, deleteApi) => {
  try {
    // Send DELETE request to the API endpoint
    await axios.delete(deleteApi + customerId);
    
    // Filter out the deleted customer from the array of customers
    const updatedCustomers = customers.filter(
      (customer) => customer._id !== customerId
    );
    
    return updatedCustomers; // Return the updated array of customers
  } catch (error) {
    console.error("Error deleting customer: ", error);
  }
};


      // // Send PUT request to update customer data
      // const response = await axios.put(`http://localhost:5000/customers/${customer._id}`, {
      //   name,
      //   email,
      //   phone
      // });
      // // Call the onUpdate function with the updated customer data
      // onUpdate(response.data);

export const putApi = async (apiUrl ,{name,email,phone}) => {
  try {
    // Send DELETE request to the API endpoint
    let updatedCustomersList = await axios.put(apiUrl,{name,email,phone});
    

    
    return updatedCustomersList; 
    // Return the updated array of customers
  } catch (error) {
    console.error("Error deleting customer: ", error);
  }
};


