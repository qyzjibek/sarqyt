import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to store tokens and set up Axios interceptors
  const handleTokens = (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    setupAxiosInterceptors(accessToken);
  };

  const setupAxiosInterceptors = (token) => {
    axios.interceptors.request.use((config) => {
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/token/', {
        email: email,
        password: password
      });

      // Assuming the response contains the access and refresh tokens
      handleTokens(response.data.access, response.data.refresh);

      // Redirect or perform additional actions on successful login here

    } catch (error) {
      console.error('Login error', error.response);
      // Handle errors here
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
