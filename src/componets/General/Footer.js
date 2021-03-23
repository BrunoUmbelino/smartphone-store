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
  position: relative;
  bottom: 0;
  color: black;
  text-align: center;
  padding-right: 2rem;
  letter-spacing: 1px;
`;

export default Footer;