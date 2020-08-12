import React, { useState, useEffect } from "react";
import styled from "styled-components";

import successBgSmImg from "../../assets/images/background-sm.svg";
import successBgMdImg from "../../assets/images/background-md.svg";
import successBgLgImg from "../../assets/images/background-lg.svg";

import successIcon from "../../assets/images/icons/success-check-icon.svg";
import useWindowSize from "../../hooks/useWindowSize";

const Container = styled.div`
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

const ImgBackground = styled.img`
  width: 100%;
  max-height: 90vh;
`;

const Main = styled.main`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 20rem;
  height: 5.6rem;
  border: 0;
  border-radius: 0.8rem;

  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  font: 700 1.4rem Archivo;
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const MessageTitle = styled.h1`
  margin-top: 2.4rem;

  color: ${({ theme }) => theme.colors.titleInPrimary};
`;

const Message = styled.p`
  text-align: center;

  max-width: 60%;
  margin: 1.6rem 0 6rem;
`;

const Img = styled.img``;

const MessagePage: React.FC = () => {
  const [windowWidth] = useWindowSize();
  const [background, setBackground] = useState<string>();

  useEffect(() => {
    function switchBackground() {
      if (windowWidth < 600) {
        setBackground(successBgSmImg);
      } else if (windowWidth < 800) {
        setBackground(successBgMdImg);
      } else {
        setBackground(successBgLgImg);
      }
    }

    switchBackground();
  }, [windowWidth]);

  return (
    <Container>
      <Content>
        <ImgBackground src={background} alt="Imagem de fundo" />
        <Main>
          <Img src={successIcon} alt="Bem sucedido" />
          <MessageTitle>Cadastro realizado com sucesso.</MessageTitle>
          <Message>
            Tudo certo, seu cadastro está na nossa lista de professores. Agora é
            só ficar de olho no seu WhatsApp.
          </Message>
          <Button type="button">Acessar lista</Button>
        </Main>
      </Content>
    </Container>
  );
};

export default MessagePage;
