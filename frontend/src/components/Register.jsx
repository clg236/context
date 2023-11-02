import React, { useState } from 'react';
import styled from 'styled-components';

// Styled container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: adding some shadow for depth */
  max-width: 300px;
  margin: 50px auto; /* Centering the container */
  background-color: white; /* Background color */
`;

// Styled input
const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const RegisterButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

export const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      
      try {
        const response = await fetch(`${apiUrl}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Registration failed');
        }
  
        const data = await response.json();
        console.log('Registration Successful:', data);
        // Handle further logic after successful registration
        // such as redirecting to the login page or directly logging in the user
      } catch (error) {
        console.error('Error during registration:', error);
      }
    };
  
    return (
      <Container>
        <h1>Register</h1>
        <StyledInput
          aria-label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <StyledInput
          aria-label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <StyledInput
          aria-label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <RegisterButton onClick={handleRegister}>Register</RegisterButton>
      </Container>
    );
  };
  
  export default Register;