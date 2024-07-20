import React, { useState, FormEvent } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { postVendorFormDetails } from '../../redux/actions/ServerActions/ServerActions';

// Define the types for state
interface Vendor {
  name: string;
  email: string;
  upi: string;
}

const AddVendor: React.FC = () => {
  // State with typing
  const [vendorFormState, setVendorFormState] = useState<Vendor>({
    name: '',
    email: '',
    upi: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVendorFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Form submission handler
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postVendorFormDetails(vendorFormState)
    setVendorFormState({
      name: '',
      email: '',
      upi: ''
    });
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2, // Spacing between form elements
          p: 2, // Padding around the form
          borderRadius: 1, // Rounded corners
          boxShadow: 3, // Subtle shadow effect
          backgroundColor: '#fff', // White background
          marginTop: "20%"
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={vendorFormState.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          name="email"
          value={vendorFormState.email}
          onChange={handleChange}
        />
        <TextField
          label="UPI"
          variant="outlined"
          fullWidth
          name="upi"
          value={vendorFormState.upi}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }} // Add margin top to separate from inputs
        >
          Add Vendor
        </Button>
      </Box>
    </Container>
  );
};

export default AddVendor;
