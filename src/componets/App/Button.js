import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background-color: transparent;
  border: 0.2rem solid var(--lightBlue);
  border-color: ${(props) => (props.cart ? "var(--mainBlue)" : "black")};
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
  }
`;
