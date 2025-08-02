"use client";

import styled from "styled-components";

const Footer = styled.footer`
  background-color: #1f2937;
  color: white;
  text-align: center;
  padding: 2rem 0;
`;

const FooterSection = () => {
  return (
    <Footer>
      <div className="container">
        <p>&copy; 2024 김개발. All rights reserved.</p>
      </div>
    </Footer>
  );
};

export default FooterSection;
