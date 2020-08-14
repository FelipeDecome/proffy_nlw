import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInPrimary};
`;

export const Content = styled(Container)`
  max-width: 1100px;
`;

export const ImgBackground = styled.img`
  width: 100%;
  max-height: 90vh;
`;

export const Main = styled.main`
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

export const MessageTitle = styled.h1`
  margin-top: 2.4rem;

  color: ${({ theme }) => theme.colors.titleInPrimary};
`;

export const Message = styled.p`
  text-align: center;

  width: 60%;
  max-width: 48rem;
  margin: 1.6rem 0 6rem;
`;

export const Img = styled.img``;

export const ButtonsWrapper = styled.div`
  display: flex;
`;
