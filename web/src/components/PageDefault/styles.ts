import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInPrimary};
`;

export interface ContentProps {
  contentMaxWidth?: string;
}

export const Content = styled.div<ContentProps>`
  width: 90vw;
  max-width: ${props => props.contentMaxWidth || "1100px"};
`;
