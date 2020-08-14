import React from "react";

import PageDefault from "../PageDefault";
import {
  ImgBackground,
  Main,
  MessageIcon,
  MessageTitle,
  Message,
} from "./styles";

interface Image {
  src: string;
  alt: string;
}

interface MessagePageProps {
  background: Image;
  icon: Image;
  title: string;
  message: string;
}

const MessagePage: React.FC<MessagePageProps> = ({
  background,
  icon,
  title,
  message,
  children,
}) => {
  return (
    <PageDefault>
      <ImgBackground src={background.src} alt={background.alt} />
      <Main>
        <MessageIcon src={icon.src} alt={icon.alt} />
        <MessageTitle>{title}</MessageTitle>
        <Message>{message}</Message>
        {children}
      </Main>
    </PageDefault>
  );
};

export default MessagePage;
