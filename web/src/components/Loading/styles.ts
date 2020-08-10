import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
    0% {
        transform: scale(0.2) rotate(360deg);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0.2);
    }
`;

const LoadingColorAnimation = keyframes`
    0% {
        fill: var(--color-text-base);
    }
    40% {
        fill: var(--color-primary);
    }
    50% {
        fill: var(--color-text-base);
    }
    80% {
        fill: var(--color-secundary);
    }
    100% {
        fill: var(--color-text-base);
    }
`;

interface LoadingSvgProps {
  loadingWidth?: string;
}

const LoadingSvg = styled.svg<LoadingSvgProps>`
  width: ${({ loadingWidth }) => (loadingWidth ? loadingWidth : "10rem")};
  animation: ${LoadingAnimation};
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  path {
    animation-name: ${LoadingColorAnimation};
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
  }
`;

export default LoadingSvg;
