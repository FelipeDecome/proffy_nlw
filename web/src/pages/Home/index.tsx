import React from "react";
import styled from "styled-components";

import HeaderBar from "../../components/HeaderBar";
import PageDefault from "../../components/PageDefault";
import { Primary, Secondary, ButtonsWrapper } from "../../components/Button";

import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";

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
  max-width: 700px;
  padding-bottom: 3.6rem;

  color: ${({ theme }) => theme.colors.textInPrimary};
  background: ${({ theme }) => theme.colors.primary};
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

const Greetings = styled.p`
  font-family: Poppins;
  font-size: 2rem;
  font-weight: 400;

  & span {
    font-weight: 700;
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
        <Greetings>
          Seja bem-vindo. <span>O que deseja fazer?</span>
        </Greetings>

        <Primary>
          <img src={studyIcon} alt="Estudar" />
          Estudar
        </Primary>
        <Secondary>
          <img src={giveClassesIcon} alt="Dar aulas" />
          Dar aulas
        </Secondary>
      </LandingFooter>
    </LandingWrapper>
  );
};

export default Home;
