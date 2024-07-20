import React, { useEffect, useState } from "react";
import { getVendorList } from "../../redux/actions/ServerActions/ServerActions";
interface Vendors {
  name: string;
  email: string;
  upi: string;
}

const VendorList = () => {
  const [vendorList, setVendorList] = useState<Vendors[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      let response = await getVendorList();
      setVendorList(response);
    };
    fetchEmployees();
  }, []);
  return (
    <>
      <div className="container">
        <table id="customers">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Upi</th>
          </tr>
          <tbody>
            {vendorList.map((vendors, index) => (
              <tr key={index}>
                <td>{vendors?.name}</td>
                <td>{vendors?.email}</td>
                <td>{vendors?.upi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VendorList;
