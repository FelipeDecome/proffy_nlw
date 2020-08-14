import React, { useState, useEffect } from "react";
import useWindowSize from "../../../../hooks/useWindowSize";

import successBgSmImg from "../../../../assets/images/background-sm.svg";
import successBgMdImg from "../../../../assets/images/background-md.svg";
import successBgLgImg from "../../../../assets/images/background-lg.svg";

import successIcon from "../../../../assets/images/icons/success-check-icon.svg";

import MessagePage from "../../../../components/MessagePage";
import { Secondary, ButtonsWrapper } from "../../../../components/Button";
import { Link } from "react-router-dom";

const LessonRegisterSuccess: React.FC = () => {
  const [windowWidth] = useWindowSize();
  const [background, setBackground] = useState<string>("");

  useEffect(() => {
    function switchBackground() {
      if (windowWidth < 600) {
        setBackground(successBgSmImg);
      } else if (windowWidth < 992) {
        setBackground(successBgMdImg);
      } else {
        setBackground(successBgLgImg);
      }
    }

    switchBackground();
  }, [windowWidth]);

  return (
    <MessagePage
      background={{ src: background, alt: "Imagem de fundo" }}
      icon={{ src: successIcon, alt: "Bem sucedido" }}
      title="Cadastro salvo com sucesso!"
      message="Tudo certo, seu cadastro está na nossa lista de professores.
      Agora é só ficar de olho no seu WhatsApp."
    >
      <ButtonsWrapper>
        <Secondary as={Link} to="/study">
          Acessar lista
        </Secondary>
      </ButtonsWrapper>
    </MessagePage>
  );
};

export default LessonRegisterSuccess;
