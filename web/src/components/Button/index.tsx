import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 5.6rem;
  padding: 1.5rem 4rem;
  border: 0;
  border-radius: 0.8rem;

  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  font: 700 1.4rem Archivo;
  text-decoration: none;

  transition: 0.2s;

  & + a {
    margin-left: 0.8rem;
  }
`;

const Primary = styled(Button)`
  background: ${({ theme }) => theme.colors.primaryLighter};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Secondary = styled(Button)`
  background: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const Cancel = styled(Button)`
  background: ${({ theme }) => theme.colors.cancel};

  &:hover {
    background: ${({ theme }) => theme.colors.cancelDark};
  }
`;

export { Primary, Secondary, Cancel };
