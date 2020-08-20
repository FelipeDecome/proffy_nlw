import React from "react";
import { Link } from "react-router-dom";

import {
  LandingWrapper,
  LandingMain,
  LandingLogoContainer,
  LandingLogoImg,
  LandingImgContainer,
  LandingImg,
  LandingFooter,
  Greetings,
  FooterButtonsContainer,
  TotalConnections,
} from "./styles";
import HeaderBar from "../../components/HeaderBar";
import { PrimaryLarge, SecondaryLarge } from "../../components/Button";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import heartIcon from "../../assets/images/icons/purple-heart.svg";

const Home: React.FC = () => {
  return (
    <LandingWrapper>
      <HeaderBar />

      <LandingMain>
        <LandingLogoContainer>
          <LandingLogoImg src={logoImg} alt="" />
          <h2>Sua plataforma de estudos online.</h2>
        </LandingLogoContainer>
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
