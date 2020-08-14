import React from "react";
import { Link } from "react-router-dom";
import { StyledComponent } from "styled-components";

import {
  Container,
  Content,
  ImgBackground,
  Main,
  Img,
  MessageTitle,
  Message,
  ButtonsWrapper,
} from "./styles";

interface Image {
  src: string;
  alt: string;
}

interface Button {
  Type: StyledComponent<any, any, any, any>;
  text: React.ReactNode;
  to: string;
}

interface MessagePageProps {
  background: Image;
  icon: Image;
  title: string;
  message: string;
  buttons: JSX.Element;
}

const MessagePage: React.FC<MessagePageProps> = ({
  background,
  icon,
  title,
  message,
  buttons,
}) => {
  return (
    <Container>
      <Content>
        <ImgBackground src={background.src} alt={background.alt} />
        <Main>
          <Img src={icon.src} alt={icon.alt} />
          <MessageTitle>{title}</MessageTitle>
          <Message>{message}</Message>
          <ButtonsWrapper>{buttons}</ButtonsWrapper>
        </Main>
      </Content>
    </Container>
  );
};

export default MessagePage;
