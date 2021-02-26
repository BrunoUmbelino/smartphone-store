import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import logo from "../../icon.png";

function Navbar() {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="phone-store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          My cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background-color: var(--mainBlue);
  height: 80px;

  .navbar-brand {
    width: 50px;
    background: linear-gradient(120deg, #bd1e41, #3cdf80);
    border-radius: 8px;
  }

  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
