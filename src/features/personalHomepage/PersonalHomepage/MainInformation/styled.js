import { ReactComponent as EnvelopeIcon } from "./envelope.svg";
import { ButtonLink } from "../ButtonLink";
import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;
  margin-top: -30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Avatar = styled.img`
  width: 30vw;
  max-width: 384px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  animation: slide-in-elliptic-left-fwd 2s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 1s;

  @keyframes slide-in-elliptic-left-fwd {
    0% {
      transform: translateX(-800px) rotateY(30deg) scale(0);
      transform-origin: -100% 50%;
      opacity: 0;
    }
    100% {
      transform: translateX(0) rotateY(0) scale(1);
      transform-origin: 1800px 50%;
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 132px;
  }
`;

export const ThisIs = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: initial;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 38px;
  font-weight: 900;
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    font-weight: 900;
    margin-top: 8px;
  }
`;

export const Summary = styled.p`
  max-width: 650px;
  font-size: 20px;
  line-height: 1.4;
  margin: 36px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 570px;
    font-size: 16px;
  }
`;

export const Icon = styled.img`
  margin-right: 4px;
  vertical-align: text-top;
  width: 24px;
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 24px;
  }
`;

export const ButtonIcon = styled(EnvelopeIcon)`
  margin-right: 16px;
`;
