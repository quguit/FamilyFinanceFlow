
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard";
import Pessoas from "../pages/Pessoas";

function App() {
  const isLogged = localStorage.getItem("userId");

  return (
    <Routes>
      <Route path="/" element={isLogged ? <Navigate to="\Dashboard" /> : <Login />} />
      <Route path="/dashboard" element={isLogged ? <Dashboard /> : <Navigate to="/" />} />
      <Route path="/pessoas" element={<Pessoas />} />
    </Routes>
  );
}

export default App
