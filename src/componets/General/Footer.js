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
  background-color: var(--background);
  color: black;
  text-align: center;
  padding-right: 2rem;
  bottom: 0;
  left: 0;
  right: 0;
  position: relative;
  letter-spacing: 1px;
`;

export default Footer;
