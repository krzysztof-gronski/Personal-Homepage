import styled, { css } from "styled-components";
import { ReactComponent as LightIcon } from "./light.svg";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: inherit;
  background: none;
  border: none;
  outline-offset: 8px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Box = styled.span`
  display: flex;
  width: 48px;
  background: ${({ theme }) => theme.colors.themeSwitch.background};
  border: 1px solid;
  padding: 3px;
  border-radius: 12px;
`;

export const Switch = styled.span`
display: flex;
background: currentColor;
border-radius: 50%;
padding: 3px;
transition: transform 0.3s;

${({ moveToRight }) =>
  moveToRight &&
  css`
    transform: translateX(20px);
  `}
`;

export const Icon = styled(LightIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
