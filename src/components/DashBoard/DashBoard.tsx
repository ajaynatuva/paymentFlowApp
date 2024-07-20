import React, { useState } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import EmployeeForm from '../EmployeeForm/Employee';
import AddVendor from '../Vendors/Vendor';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);

  const handleLogin = (userData: { username: string; password: string; role: string }) => {
    // Simulate login logic
    setUser({
      username: userData.username,
      role: userData.role
    });
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <>
      {user.role === 'admin' && <EmployeeForm />}
      {user.role === 'admin' || user.role === 'vendor' ? <AddVendor /> : null}
    </>
  );
};

export default Dashboard;
