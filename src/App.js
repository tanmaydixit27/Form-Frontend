import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import EditForm from "./pages/EditForm";
import ViewForm from "./pages/ViewForm";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/form/create" element={<CreateForm />} />
    <Route path="/form/:id/edit" element={<EditForm />} />
    <Route path="/form/:id" element={<ViewForm />} />
  </Routes>
);

export default App;
