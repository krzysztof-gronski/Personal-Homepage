import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { themeDark, themeLight } from "./theme";
import { useSelector } from "react-redux";
import { PersonalHomepage } from "../../features/personalHomepage/PersonalHomepage";
import { selectIsDarkTheme } from "../../common/themeSlice";

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;

//
