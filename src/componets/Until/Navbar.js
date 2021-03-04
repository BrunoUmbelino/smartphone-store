import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "./Button";
import logo from "../../icon.png";

function Navbar() {
  return (
    <NavWrapper className="navbar navbar-expand-sm px-sm-4">
      <Link to="/">
        <img src={logo} alt="phone-store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-2">
        <PrimaryButton>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          My cart
        </PrimaryButton>
      </Link>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background-color: var(--red);
  height: 80px;

  .navbar-brand {
    width: 50px;
    background: linear-gradient(120deg, var(--green), var(--blue));
    border-radius: 8px;
  }

  .nav-link {
    font-size: 1.6rem;
    font-weight: 400;
    color: white;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
  }
  .nav-link:hover {
    color: lightgray;
  }
`;

export default Navbar;
