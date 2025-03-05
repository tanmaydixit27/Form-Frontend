import React, { useState } from "react";
import { createForm } from "../api/formApi";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const CreateForm = () => {
  const [title, setTitle] = useState("Job Application");
  const [fields, setFields] = useState([]);
  const navigate = useNavigate();

  const inputTypes = ["TEXT", "NUMBER", "EMAIL", "PASSWORD", "DATE"];

  const addField = (type) => {
    setFields((prevFields) => [
      ...prevFields,
      {
        id: Date.now(),
        type: String(type.toLowerCase()),
        label: `Enter ${type.toLowerCase()}`,
        placeholder: `Enter ${type.toLowerCase()} here`,
      },
    ]);
  };

  const removeField = (id) => {
    setFields((prevFields) => prevFields.filter((field) => field.id !== id));
  };

  const handleSave = async () => {
    try {
      await createForm({ title, fields });
      alert("Form created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error creating form:", error);
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" textAlign="center">Create New Form</Typography>

      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Form Title"
          variant="outlined"
          sx={{ width: "50%" }}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        {inputTypes.map((type) => (
          <Button key={type} variant="contained" onClick={() => addField(type)}>
            {type}
          </Button>
        ))}
      </Box>

      {/* Render Fields */}
      <Box sx={{ mt: 3 }}>
        {fields.length > 0 ? (
          fields.map((field) => (
            <Box key={field.id} sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography sx={{ flexGrow: 1 }}>
                <strong>{String(field.label)}</strong>: {String(field.placeholder)} ({String(field.type)})
              </Typography>
              <IconButton onClick={() => removeField(field.id)} color="error">
              {React.createElement(DeleteIcon)}

              </IconButton>
            </Box>
          ))
        ) : (
          <Typography variant="body1" textAlign="center" sx={{ color: "gray" }}>
            No fields added yet. Click above buttons to add fields.
          </Typography>
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button variant="contained" color="success" onClick={handleSave}>
          Create Form
        </Button>
      </Box>
    </Box>
  );
};

export default CreateForm;
