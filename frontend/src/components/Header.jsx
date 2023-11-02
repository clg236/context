import React from 'react';
import styled from 'styled-components';

// Styled header
const StyledHeader = styled.header`
  position: sticky;
  top: 0;                  // Stick to the top of the viewport
  background-color: #333;  // Use your desired background color
  color: white;            // Text color
  padding: 10px 20px;      // Padding for the header content
  z-index: 1000;           // Ensure the header stays on top of other content
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);  // Optional: adds a shadow for depth
`;

export const Header = () => {
    return (
        <StyledHeader>
            <h1>THIS IS A HEADER CRAZY!</h1>
        </StyledHeader>
    )
}

export default Header;