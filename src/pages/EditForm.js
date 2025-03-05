import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFormById, updateForm } from "../api/formApi";
import { TextField, Button, Typography } from "@mui/material";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [fields, setFields] = useState([]);

  useEffect(() => {
    getFormById(id)
      .then((res) => {
        setTitle(String(res.data.title || ""));
        setFields(
          res.data.fields.map((field, index) => ({
            id: field.id || `${Date.now()}-${index}`, // ✅ Ensuring uniqueness
            label: String(field.label || ""),
            placeholder: String(field.placeholder || ""),
            type: String(field.type || "text"),
            value: String(field.value || ""),
          }))
        );
      })
      .catch((err) => console.error("Error fetching form:", err));
  }, [id]);

  const handleUpdate = async () => {
    try {
      await updateForm(id, { title, fields });
      alert("Form updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Edit Form</Typography>
      <TextField
        fullWidth
        label="Form Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
      />

      {fields.map((field, index) => (
        <TextField
          key={field.id} // ✅ Ensuring a unique key
          fullWidth
          label={String(field.label)}
          placeholder={String(field.placeholder)}
          type={String(field.type)}
          value={String(field.value)}
          onChange={(e) => {
            setFields((prevFields) =>
              prevFields.map((f, i) =>
                i === index ? { ...f, value: e.target.value } : f
              )
            );
          }}
          margin="normal"
        />
      ))}

      <Button variant="contained" onClick={handleUpdate} sx={{ mt: 2 }}>
        Update Form
      </Button>
    </div>
  );
};

export default EditForm;
