import React, { useState, useEffect } from "react";
import useWindowSize from "../../../../hooks/useWindowSize";
import { Link } from "react-router-dom";

import MessagePage from "../../../../components/MessagePage";
import { Cancel, Primary } from "../../../../components/Button";

import successBgSmImg from "../../../../assets/images/background-error-sm.svg";
import successBgMdImg from "../../../../assets/images/background-error-md.svg";
import successBgLgImg from "../../../../assets/images/background-error-lg.svg";

import errorIcon from "../../../../assets/images/icons/error-icon.svg";

const LessonRegisterError: React.FC = () => {
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
      icon={{ src: errorIcon, alt: "Mal sucedido" }}
      title="Cadastro não realizado!"
      message="Houve algum problema com o cadastro, tente novamente. Caso o problema persista você pode nos notificar no link abaixo ."
      buttons={
        <>
          <Primary as={Link} to="/report-bug">
            Reportar problema
          </Primary>
          <Cancel as={Link} to="/give-classes">
            Voltar ao formulário
          </Cancel>
        </>
      }
    />
  );
};

export default LessonRegisterError;
