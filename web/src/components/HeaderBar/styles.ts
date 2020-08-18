import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const placeholderAnimation = keyframes`
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0.4;
  }
`;

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  padding: 2.4rem 0 1.6rem;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 110rem;

  &:last-child {
    margin-top: 1.6rem;
  }
`;

export const Profile = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  margin-right: 1.6rem;
`;

export const AvatarPlaceholder = styled.span`
  position: absolute;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  margin-right: 1.6rem;

  background: ${({ theme }) => theme.colors.textInPrimary};
  animation-name: ${placeholderAnimation};
  animation-duration: 1.6s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;

export const ProfileUsername = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textInPrimary};
`;

export const ProfilePlaceholder = styled.span`
  height: 2.4rem;
  width: 10rem;

  background: ${({ theme }) => theme.colors.textInPrimary};
  animation-name: ${placeholderAnimation};
  animation-duration: 1.6s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;

export const LogoutButton = styled.div`
  padding: 1rem;
  height: 4rem;

  background: ${({ theme }) => theme.colors.primaryDark};
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDarker};
  }
`;
