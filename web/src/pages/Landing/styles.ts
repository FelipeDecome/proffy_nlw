import styled from "styled-components";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInPrimary};
`;

export const LandingMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 5.6rem;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2.4rem;

  & img {
    height: 6.2rem;
  }

  & h2 {
    font-size: 1.8rem;
  }
`;
export const HeroContainer = styled.div`
  width: 90vw;

  & img {
    width: 100%;
  }
`;

export const Footer = styled.footer``;
