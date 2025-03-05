import axios from "axios";

const API_BASE_URL = "https://form-backend-1v23.onrender.com/api/forms";

export const getForms = async () => axios.get(API_BASE_URL);

export const getFormById = async (id) => axios.get(`${API_BASE_URL}/${id}`);

export const createForm = async (form) => {
    return await axios.post(`${API_BASE_URL}`, form, {
      headers: { "Content-Type": "application/json" },
    });
  };

export const updateForm = async (id, updatedForm) => {
    return await axios.put(`${API_BASE_URL}/${id}`, updatedForm, {
      headers: { "Content-Type": "application/json" },
    });
  };
export const deleteForm = async (id) => axios.delete(`${API_BASE_URL}/${id}`);
