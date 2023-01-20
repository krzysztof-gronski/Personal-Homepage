import styled from "styled-components";

export const SubHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 30px;
  font-weight: 900;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;
