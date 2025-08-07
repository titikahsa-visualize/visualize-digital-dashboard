import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

// const BASE_URL = 'http://localhost:5000'; // Replace with your actual backend URL

// ✅ GET all testimonials
export const getAllTestimonials = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/testimonials`);
    return res.data;
  } catch (err) {
    console.error("GET Error (Testimonials):", err);
    throw err;
  }
};

// ✅ CREATE a new testimonial
export const createTestimonial = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/testimonials`, data);
    console.log("Testimonial created successfully:", res.data);
    return res.data;
  } catch (err) {
    console.error("POST Error (Testimonials):", err);
    console.log("Data sent:", data);
    console.log("Error details:", err.response ? err.response.data : err.message);
    throw err;
  }
};

// ✅ UPDATE a testimonial by ID
export const updateTestimonial = async (id, data) => {
  try {
    const res = await axios.put(`${BASE_URL}/api/testimonials/${id}`, data);
    console.log("Testimonial updated successfully:", res.data);
    return res.data;
  } catch (err) {
    console.error("PUT Error (Testimonials):", err);
    console.log("Data sent:", data);
    console.log("Error details:", err.response ? err.response.data : err.message);
    throw err;
  }
};

// ✅ DELETE a testimonial by ID
export const deleteTestimonial = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/api/testimonials/${id}`);
    console.log("Testimonial deleted successfully:", res.data);
    return res.data;
  } catch (err) {
    console.error("DELETE Error (Testimonials):", err);
    console.log("Error details:", err.response ? err.response.data : err.message);
    throw err;
  }
};
