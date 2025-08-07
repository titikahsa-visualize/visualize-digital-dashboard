import axios from 'axios';
const BASE_URL = 'http://localhost:5000';
 // Adjust the base URL as needed
// const BASE_URL = 'http://localhost:5000'; // Adjust the base URL as needed
// replace with your actual URL

// ✅ GET all blogs
export const getAllBlogs = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/blogs`);
    return res.data;
  } catch (err) {
    console.error("GET Error:", err);
    throw err;
  }
};

// ✅ CREATE a new blog
export const createBlog = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/blogs`, data);
    console.log("Blog created successfully:", res.data);
    return res.data;
  } catch (err) {
    console.error("POST Error:", err);
    console.log("Data sent:", data);
    console.log("Error details:", err.response ? err.response.data : err.message);
    throw err;
  }
};

// ✅ UPDATE a blog by ID
export const updateBlog = async (id, data) => {
  try {
    const res = await axios.put(`${BASE_URL}/api/blogs/${id}`, data);
    console.log("Blog updated successfully:", res.data);
    return res.data;
  } catch (err) {
    console.error("PUT Error:", err);
    console.log("Data sent:", data);
    console.log("Error details:", err.response ? err.response.data : err.message);
    throw err;
  }
};

// ✅ DELETE a blog by ID
export const deleteBlog = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/api/blogs/${id}`);
    console.log("Blog deleted successfully:", res.data);
    return res.data;
  } catch (err) {
    console.error("DELETE Error:", err);
    console.log("Error details:", err.response ? err.response.data : err.message);
    throw err;
  }
};
