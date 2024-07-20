import React, { useState, FormEvent } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { postEmployeeFormDetails } from '../../redux/actions/ServerActions/ServerActions';

// Define type for form state
interface FormState {
  name: string;
  designation: string;
  ctc: string;
  email: string;
}

const EmployeeForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    designation: '',
    ctc: '',
    email: ''
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
       postEmployeeFormDetails(formState)
    setFormState({
      name: '',
      designation: '',
      ctc: '',
      email: ''
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
          marginTop:"20%"
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        <TextField
          label="Designation"
          variant="outlined"
          name="designation"
          value={formState.designation}
          onChange={handleChange}
        />
        <TextField
          label="CTC"
          type="number"
          variant="outlined"
          name="ctc"
          value={formState.ctc}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Add Employee
        </Button>
      </Box>
    </Container>
  );
};

export default EmployeeForm;
