import React, { useEffect, useState } from "react";
import { getAllVendorEmails } from "../../redux/actions/ServerActions/ServerActions";

const EmailsList = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      let response = await getAllVendorEmails();
      setMessage(response);
    };
    fetchEmployees();
  }, []);
  return (
    <>
      <div className="container">
        <table id="customers">
          <tr>
            <th>Email</th>
          </tr>
          <tbody>
            {message.map((msg, index) => (
              <tr key={index}>
                <td>{msg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmailsList;
