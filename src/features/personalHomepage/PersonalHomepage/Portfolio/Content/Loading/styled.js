import styled from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  display: grid;
  justify-items: center;
  color: ${({theme})=theme.colors.textPrimary};
  text-align: center;
  margin-top: 88px;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
    margin-top: 32px;
  }
`;

export const StyledSpinner = styled(Spinner)`
  color: ${({theme})=>theme.colors.primary};
  height: auto;
  margin-top: 48px;
  animation: ${rotate} 1s linear infinite;

  @media(max-width: ${({theme})=>theme.breakpoints.mobileMax}px){
  margin-top: 32px;
  width: 60px;
}
`;
