import { TextField } from "@mui/material";
import React from "react";

const FormField = ({ type, label, placeholder, value, onChange, readOnly }) => {
  return (
    <TextField
      type={String(type || "text")}
      label={String(label || "")}
      placeholder={String(placeholder || "")}
      value={value || ""}
      onChange={onChange}
      InputProps={{ readOnly }}
      fullWidth
      margin="dense"
    />
  );
};

export default FormField;
