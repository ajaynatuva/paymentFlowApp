import React, { useEffect, useState } from "react";
import { getEmployeeList } from "../../redux/actions/ServerActions/ServerActions";
import "../EmployeeList/Employee.css";

interface employeeList {
  name: string;
  designation: string;
  ctc: string;
  email: string;
}
const EmployeeList = () => {
  const [employees, setEmployees] = useState<employeeList[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      let response = await getEmployeeList();
      let data = response.map((k: any) => {
        return {
          name: k.name,
          designation: k.designation,
          ctc: k.ctc,
          email: k.email,
        };
      });
      setEmployees(data);
    };
    fetchEmployees();
  }, []);
  return (
    <>
      <div className="container">
        <table id="customers">
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>CTC</th>
            <th>Employee</th>
          </tr>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee?.name}</td>
                <td>{employee?.designation}</td>
                <td>{employee?.ctc}</td>
                <td>{employee?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
