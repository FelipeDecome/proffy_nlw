import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import {
  Container,
  Content,
  ImgBackground,
  Main,
  Img,
  MessageTitle,
  Message,
} from "./styles";

import successBgSmImg from "../../assets/images/background-sm.svg";
import successBgMdImg from "../../assets/images/background-md.svg";
import successBgLgImg from "../../assets/images/background-lg.svg";

import successIcon from "../../assets/images/icons/success-check-icon.svg";
import useWindowSize from "../../hooks/useWindowSize";

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
          <Button as={Link} to="/study" type="button">
            Acessar lista
          </Button>
        </Main>
      </Content>
    </Container>
  );
};

export default MessagePage;
