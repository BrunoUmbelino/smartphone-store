import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <p className="mb-0 py-2">By Bruno Umbelino</p>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  background-color: var(--dark);
  color: white;
  text-align: center;
  padding-right: 2rem;
  bottom: 0;
  left: 0;
  right: 0;
  position: relative;
`;

export default Footer;
