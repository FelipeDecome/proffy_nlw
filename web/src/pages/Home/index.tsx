import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HeaderBar from "../../components/HeaderBar";
import { PrimaryLarge, SecondaryLarge } from "../../components/Button";

import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import heartIcon from "../../assets/images/icons/purple-heart.svg";

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const LandingMain = styled.main`
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

const LandingImgContainer = styled.div`
  width: 90%;
  max-width: 600px;
`;

const LandingImg = styled.img`
  width: 100%;
`;

const LandingFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 3.6rem 4rem;
`;

const FooterButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-top: 3.6rem;
  margin-bottom: 3.6rem;
`;

const Greetings = styled.p`
  font-family: Poppins;
  font-size: 2rem;
  font-weight: 400;

  & span {
    font-weight: 700;
  }
`;

const TotalConnections = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textComplement};

  & > img {
    margin-left: 0.8rem;
  }
`;

const Home: React.FC = () => {
  return (
    <LandingWrapper>
      <HeaderBar />

      <LandingMain>
        <LandingImgContainer>
          <LandingImg src={landingImg} alt="Proffy" />
        </LandingImgContainer>
      </LandingMain>

      <LandingFooter>
        <Greetings>
          Seja bem-vindo. <span>O que deseja fazer?</span>
        </Greetings>

        <FooterButtonsContainer>
          <PrimaryLarge as={Link} to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </PrimaryLarge>
          <SecondaryLarge as={Link} to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </SecondaryLarge>
        </FooterButtonsContainer>

        <TotalConnections>
          Total de 285 conexões já realizadas
          <img src={heartIcon} alt="Coração roxo" />
        </TotalConnections>
      </LandingFooter>
    </LandingWrapper>
  );
};

export default Home;
