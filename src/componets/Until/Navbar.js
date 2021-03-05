import React, { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "./Button";
import logo from "../../icon.png";
import {
  Collapse,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Navbar,
  NavbarText,
} from "reactstrap";

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavWrapper>
      <Navbar
        color="blue"
        dark
        expand="md"
        className="align-content-center my-0 py-0"
      >
        <NavbarBrand href="/">
          <img src={logo} alt="phone-store" />
        </NavbarBrand>
        <NavbarText>Smart Store</NavbarText>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto align-items-center" navbar>
            <NavItem>
              <NavLink href="/">
                <span className="navlink-product">Products</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart">
                <PrimaryButton>
                  <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                  </span>
                  My cart
                </PrimaryButton>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  bottom: 0;
  display: block;

  .navbar {
    background-color: var(--red);
  }

  .navbar-dark .navbar-toggler {
    border: 2px solid white;
    background-color: #bd200f;
    border-radius: 5px;
  }

  .navbar-text {
    color: white;
    font-size: 2rem;
  }

  .navbar-brand img {
    height: 60px;
    background: linear-gradient(120deg, var(--green), var(--blue));
    border-radius: 8px;
    padding: 5px 0px;
  }

  .navlink-product {
    font-size: 1.4rem;
    font-weight: 400;
    color: white;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: black;
    }
  }
`;

export default MyNavbar;
