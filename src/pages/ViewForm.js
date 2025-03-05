import React, { useEffect, useState } from "react";
import { getFormById } from "../api/formApi";
import FormField from "../components/FormField";
import { Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const ViewForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    getFormById(id).then((res) => setForm(res.data));
  }, [id]);

  return (
    <div>
      {form && (
        <>
          <Typography variant="h4">{String(form.title)}</Typography>
          {form.fields.map((field, index) => (
  <FormField
    key={field.id}
    label={String(field.label)}
    placeholder={String(field.placeholder)}
    type={String(field.type)}
  />
))}

          <Button variant="contained">Submit</Button>
        </>
      )}
    </div>
  );
};

export default ViewForm;
