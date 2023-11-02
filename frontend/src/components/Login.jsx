/*
Here we are rendering a component called login (check the Home component too)
We also use an npm package called 'styled-components' to style our own 'HTML tags', including divs, pretty cool.
*/

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

const LoginButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const apiUrl = import.meta.env.VITE_API_URL;

        try {
            const response = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            // check the server.js for the response to this, I send a token, you should see it
            const data = await response.json();
            console.log('Login Successful:', data);
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <Container>
            <h1>Login</h1>
            <StyledInput
                aria-label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <StyledInput
                aria-label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <LoginButton onClick={handleLogin}>Login</LoginButton>
        </Container>
    );
};

export default Login;
