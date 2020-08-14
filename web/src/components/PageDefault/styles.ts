import styled from "styled-components";
import { Container } from "../../assets/styles/GlobalStyle";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInPrimary};
`;

export interface ContentProps {
  contentMaxWidth?: string;
}

export const Content = styled(Container)<ContentProps>`
  max-width: ${(props) => props.contentMaxWidth || "1100px"};
`;
