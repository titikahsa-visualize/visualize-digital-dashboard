import axios from 'axios';

// const BASE_URL = 'http://localhost:5000'; // Adjust if needed
const BASE_URL = 'http://localhost:5000';

// ✅ GET all SEO services
export const getAllSeoServices = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/seoServices`);
    return res.data;
  } catch (err) {
    console.error("GET SEO Services Error:", err);
    throw err;
  }
};

// ✅ CREATE a new SEO service
export const createSeoService = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/seoServices`, data);
    console.log("SEO service created successfully:", res.data);
    return res.data;
  } catch (err) {
    console.error("POST SEO Service Error:", err);
    console.log("Data sent:", data);
    console.log("Error details:", err.response ? err.response.data : err.message);
    throw err;
  }
};

// ✅ UPDATE SEO service by ID
export const updateSeoService = async (id, data) => {
  try {
    const res = await axios.put(`${BASE_URL}/api/seoServices/${id}`, data);
    console.log("SEO service updated successfully:", res.data);
    return res.data;
  } catch (err) {
    console.error("PUT SEO Service Error:", err);
    console.log("Data sent:", data);
    console.log("Error details:", err.response ? err.response.data : err.message);
    throw err;
  }
};

// ✅ DELETE SEO service by ID
export const deleteSeoService = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/api/seoServices/${id}`);
    console.log("SEO service deleted successfully:", res.data);
    return res.data;
  } catch (err) {
    console.error("DELETE SEO Service Error:", err);
    console.log("Error details:", err.response ? err.response.data : err.message);
    throw err;
  }
};
