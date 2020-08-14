import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 5.6rem;
  width: 90%;
  border: 0;
  border-radius: 0.8rem;

  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  font-family: Archivo;
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: none;

  transition: 0.2s;

  & + a,
  & + button {
    margin-top: 0.8rem;
  }

  @media (min-width: 700px) {
    width: auto;
    padding: 1.5rem 4rem;

    & + a,
    & + button {
      margin-left: 0.8rem;
      margin-top: 0;
    }
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

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 90%;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export { Primary, Secondary, Cancel, ButtonsWrapper };
