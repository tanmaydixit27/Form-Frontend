import React, { useEffect, useState } from "react";
import { getForms, deleteForm } from "../api/formApi";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FormList = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadForms();
  }, []);

  const loadForms = () => {
    getForms()
      .then((res) => setForms(res.data))
      .catch((err) => console.error("Error fetching forms:", err));
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this form?")) {
      try {
        await deleteForm(id);
        alert("Form deleted successfully!");
        loadForms(); // Refresh form list
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
  };

  return (
    <>
      {forms.map((form) => (
        <Card key={form._id} sx={{ margin: 2 }}>
          <CardContent>
            <Typography variant="h6">{form.title}</Typography>
            {/* Corrected template literals with backticks */}
            <Button onClick={() => navigate(`/form/${form._id}`)}>View</Button>
            <Button onClick={() => navigate(`/form/${form._id}/edit`)}>Edit</Button>
            <Button onClick={() => handleDelete(form._id)} color="error">Delete</Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default FormList;
