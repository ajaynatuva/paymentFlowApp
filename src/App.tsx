import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Navbar from "./components/NavBar/NavBar";
import EmployeeForm from "./components/EmployeeForm/Employee";
import AddVendor from "./components/Vendors/Vendor";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import VendorList from "./components/VendorsList/VendorList";
import EmailsList from "./components/SendEmails/EmailsList";

const App: React.FC = () => {
  const [user, setUser] = useState<{ username: string; role: string } | null>(
    null
  );

  const handleLogin = (userData: {
    username: string;
    password: string;
    role: string;
  }) => {
    // Simulate login logic
    setUser({
      username: userData.username,
      role: userData.role,
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navbar username={user?.username ?? null} userRole ={user?user?.role:null} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to={user.role === "admin" ? "/admin" : "/vendor"} />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/admin"
          element={
            user && user.role === "admin" ? (
              <EmployeeForm />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/emails"
          element={
            user && user.role === "admin" ? <EmailsList /> : <Navigate to="/" />
          }
        />
        <Route
          path="/employeeList"
          element={
            user && user.role === "admin" ? (
              <EmployeeList />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/vendor"
          element={user ? <AddVendor /> : <Navigate to="/" />}
        />
        <Route
          path="/vendorsList"
          element={user ? <VendorList /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
