import React from "react";
import FormList from "../components/FormList";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Form Builder</h1>
      <Button variant="contained" onClick={() => navigate("/form/create")}>Create New Form</Button>
      <FormList />
    </div>
  );
};

export default Home;
