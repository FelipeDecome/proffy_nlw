import styled from "styled-components";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const LandingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  height: 100%;
  width: 100%;
  padding-bottom: 3.6rem;

  color: ${({ theme }) => theme.colors.textInPrimary};
  background: ${({ theme }) => theme.colors.primary};
`;

export const LandingLogoContainer = styled.div`
  text-align: center;

  & > h2 {
    display: none;
  }

  @media (min-width: 700px) {
    & > h2 {
      display: inherit;
    }
  }
`;

export const LandingLogoImg = styled.img`
  height: 7.2rem;
`;

export const LandingImgContainer = styled.div`
  width: 90%;
  max-width: 600px;
`;

export const LandingImg = styled.img`
  width: 100%;
`;

export const LandingFooter = styled.footer`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 3.6rem 4rem;
`;

export const FooterButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-top: 3.6rem;
  margin-bottom: 3.6rem;
`;

export const Greetings = styled.p`
  font-family: Poppins;
  font-size: 2rem;
  font-weight: 400;

  & span {
    font-weight: 700;
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textComplement};

  & > img {
    margin-left: 0.8rem;
  }
`;
