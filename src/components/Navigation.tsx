"use client";

import styled from "styled-components";

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 360px) {
    min-width: 360px;
    padding: 0.5rem 10px;
  }
`;

const NavLogo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #000000;
  }
`;

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
