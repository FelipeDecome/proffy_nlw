import styled from "styled-components";

const ButtonLarge = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36vw;
  height: 14rem;
  border-radius: 0.8rem;

  border: 0;
  font: 700 2rem Archivo;
  color: ${({ theme }) => theme.colors.buttonText};
  text-decoration: none;

  transition: background-color 0.2s;

  & > img {
    width: 4rem;
  }
`;

export const PrimaryLarge = styled(ButtonLarge)`
  background: ${({ theme }) => theme.colors.primaryLighter};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const SecondaryLarge = styled(ButtonLarge)`
  background: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

interface ButtonProps {
  fontSize?: string;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 5.6rem;
  width: 100%;
  border: 0;
  border-radius: 0.8rem;

  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  font-family: Archivo;
  font-size: ${({ fontSize }) => fontSize || "1.6rem"};
  font-weight: 700;
  text-decoration: none;

  transition: 0.2s;

  & > img {
    margin-right: 2.4rem;
  }

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

  width: 80%;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export { Primary, Secondary, Cancel, ButtonsWrapper };
