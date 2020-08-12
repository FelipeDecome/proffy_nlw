import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 20rem;
  height: 5.6rem;
  border: 0;
  border-radius: 0.8rem;

  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  font: 700 1.4rem Archivo;
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

export default Button;
