import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

interface LoginFormState {
  username: string;
  password: string;
  role: string;
}

const LoginPage: React.FC<{ onLogin: (user: LoginFormState) => void }> = ({ onLogin }) => {
  const [formState, setFormState] = useState<LoginFormState>({
    username: '',
    password: '',
    role: 'vendor'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(formState);
  };

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          borderRadius: 1,
          boxShadow: 3,
          marginTop:"20%",
          backgroundColor: '#fff'
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
        autoComplete='off'
          label="Username"
          variant="outlined"
          name="username"
          value={formState.username}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={formState.password}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Role"
          select
          name="role"
          value={formState.role}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          fullWidth
        >
          <option value="admin">Admin</option>
          <option value="vendor">Vendor</option>
        </TextField>
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
