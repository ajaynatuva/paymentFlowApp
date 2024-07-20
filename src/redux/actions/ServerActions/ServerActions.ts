let UPI_URL = "http://localhost:8007/upi";

export async function postEmployeeFormDetails(data: any) {
  try {
    await fetch(UPI_URL + "/api/employees", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw error;
  }
}

export async function postVendorFormDetails(data: any) {
    try {
      await fetch(UPI_URL + "/api/vendors", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      throw error;
    }
  }
  export async function sentEmailsToVendors() {
    try {
      await fetch(UPI_URL + "/api/email/vendors", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      throw error;
    }
  }

export async function getEmployeeList() {
  let result: any = await fetch(UPI_URL + "/api/employees");
  result = await result.json();
  if (result) {
    return result;
  }
}

export async function getVendorList() {
  let result: any = await fetch(UPI_URL + "/api/vendors");
  result = await result.json();
  if (result) {
    return result;
  }
}

export async function getAllVendorEmails() {
  let result: any = await fetch(UPI_URL + "/api/email/history");
  result = await result.json();
  if (result) {
    return result;
  }
}
