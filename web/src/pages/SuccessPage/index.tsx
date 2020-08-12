import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";

import { Container } from "../../assets/styles/GlobalStyle";

import successBgSmImg from "../../assets/images/background-sm.svg";
import successBgLgImg from "../../assets/images/background-lg.svg";

import successIcon from "../../assets/images/icons/success-check-icon.svg";
import useWindowSize from "../../hooks/useWindowSize";

const SuccessPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInPrimary};
`;

const Content = styled(Container)`
  max-width: 1100px;
`;

const Img = styled.img`
  width: 100%;
  max-height: 90vh;
`;

const SuccessPage: React.FC = () => {
  const [windowWidth] = useWindowSize();

  return (
    <SuccessPageContainer>
      <Content>
        <Img
          src={windowWidth < 700 ? successBgSmImg : successBgLgImg}
          alt="Imagem de fundo"
        />
        <div></div>
      </Content>
    </SuccessPageContainer>
  );
};

export default SuccessPage;
