import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

// const BASE_URL = 'http://localhost:5000'; // Adjust the base URL as needed

// ✅ GET all services
export const getAllLeads = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/leads-quotations`);
    return res.data;
  } catch (err) {
    console.error("GET Error:", err);
    throw err;
  }
};

// ✅ POST a new service
export const createLeads = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/leads-quotations`, data);
    console.log("Service created successfully:", res.data );
    return res.data;
  } catch (err) {
    console.error("POST Error:", err);
    console.log("Data sent:", data);
    console.log("Error details:", err.response ? err.response.data : err.message);
    throw err;
  }
};

// ✅ DELETE a service by slug
export const deleteService = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/api/leads-quotations/${id}`);
    return res.data;
  } catch (err) {
    console.error("DELETE Error:", err);
    throw err;
  }
};

// ✅ PUT (update) a service by ID
// ✅ In apiService.js
export const updateService = async (id, data) => {
  try {
    const res = await axios.put(`${BASE_URL}/api/leads-quotations/${id}`, data);
    return res.data;
  } catch (err) {
    console.error("UPDATE Error:", err);
    throw err;
  }
};

