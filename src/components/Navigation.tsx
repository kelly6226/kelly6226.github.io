"use client";

import styled from "styled-components";
import { colors } from "@/styles/colors";

const Navigation = () => {
  return (
    <Navbar>
      <NavContainer>
        <NavLogo>김개발</NavLogo>
        <NavMenu>
          <li>
            <NavLink href="#about">About</NavLink>
          </li>
          <li>
            <NavLink href="#skills">Skills</NavLink>
          </li>
          <li>
            <NavLink href="#company">Company</NavLink>
          </li>
          <li>
            <NavLink href="#projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="#education">Education</NavLink>
          </li>
          <li>
            <NavLink href="#activities">Activities</NavLink>
          </li>
          <li>
            <NavLink href="#contact">Contact</NavLink>
          </li>
        </NavMenu>
      </NavContainer>
    </Navbar>
  );
};

export default Navigation;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${colors.backdrop};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${colors.borderLight};
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 12px 15px;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
  }

  @media (max-width: 360px) {
    min-width: 360px;
    padding: 8px 10px;
  }
`;

const NavLogo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.black};

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${colors.gray};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.black};
  }
`;
