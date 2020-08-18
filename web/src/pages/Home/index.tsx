import React from "react";
import styled from "styled-components";

import HeaderBar from "../../components/HeaderBar";
import PageDefault from "../../components/PageDefault";

import landingImg from "../../assets/images/landing.svg";
import { PrimaryLarge, SecondaryLarge } from "../../components/Button";

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  color: ${({ theme }) => theme.colors.textInPrimary};
  background: ${({ theme }) => theme.colors.primary};
`;

const LandingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  padding-bottom: 2.4rem;
`;

const LandingImg = styled.img`
  width: 100%;
`;

const LandingFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  & > button + button {
    margin-left: 0.8rem;
  }
`;

const Home: React.FC = () => {
  return (
    <LandingWrapper>
      <HeaderBar />
      <LandingMain>
        <LandingImg src={landingImg} alt="Proffy" />
      </LandingMain>
      <LandingFooter>
        <FooterButtonsContainer>
          <PrimaryLarge></PrimaryLarge>
          <SecondaryLarge></SecondaryLarge>
        </FooterButtonsContainer>
      </LandingFooter>
    </LandingWrapper>
  );
};

export default Home;
