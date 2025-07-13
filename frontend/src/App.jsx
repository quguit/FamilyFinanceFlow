
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard";


function App() {
  const isLogged = localStorage.getItem("userId");

  return (
    <Routes>
      <Route path="/" element={isLogged ? <Navigate to="\Dashboard" /> : <Login />} />
      <Route path="/dashboard" element={isLogged ? <Dashboard /> : <Navigate to="/" />} />
    </Routes>
  );
}

export default App
