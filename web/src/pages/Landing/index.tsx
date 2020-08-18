import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import PageDefault from "../../components/PageDefault";
import HeaderBar from "../../components/HeaderBar";
import {
  LandingWrapper,
  LandingMain,
  LogoContainer,
  HeroContainer,
} from "./styles";

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then(res => {
      const { total } = res.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <LandingWrapper>
      <HeaderBar />
      <LandingMain>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        <HeroContainer>
          <img src={landingImg} alt="Plataforma de estudos" />
        </HeroContainer>
      </LandingMain>
      <div></div>
    </LandingWrapper>
  );
};

export default Landing;
