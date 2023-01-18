import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    color: ${({ theme }) => theme.colors.site.text};
    background: ${({ theme }) => theme.colors.site.background};
    font-family: "Inter", sans-serif;
    font-size: 18px;
    letter-spacing: 0.05em;
    word-break: break-word;
    overflow-y: scroll;
    transition: background 0.3s;
    padding-bottom: 108px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      padding-bottom: 32px;
    }
  }
`;
