import styled from "styled-components";

export const ImgBackground = styled.img`
  width: 100%;
  max-height: 90vh;
`;

export const Main = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;
`;

export const MessageTitle = styled.h1`
  text-align: center;

  margin-top: 2.4rem;
  font-size: 2.4rem;

  color: ${({ theme }) => theme.colors.titleInPrimary};

  @media (min-width: 700px) {
    font-size: 3.6rem;
  }

  @media (min-width: 1200px) {
    font-size: 4.8rem;
  }
`;

export const Message = styled.p`
  text-align: center;

  font-size: 1.2rem;
  width: 70%;
  max-width: 48rem;
  margin: 1.6rem 0 4rem;

  @media (min-width: 700px) {
    font-size: inherit;
    margin: 2rem 0 6rem;
  }

  @media (min-width: 1200px) {
    margin: 2.4rem 0 8rem;
    max-width: 60rem;
  }
`;

export const MessageIcon = styled.img`
  width: 10rem;

  @media (min-width: 700px) {
    width: 12rem;
  }
`;
