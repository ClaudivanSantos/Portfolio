import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { InfoProject } from "./pages/InfoProject";

export const MyRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<InfoProject />} />
        <Route path="*" element={<Navigate to="/"  />} />
      </Routes>
  );
};