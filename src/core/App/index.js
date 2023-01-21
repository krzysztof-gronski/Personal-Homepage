import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { themeDark, themeLight } from "./theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";
import PersonalHomepageSlice from "../../features/personalHomepage/personalHomepageSlice";

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      {/* <PersonalHomepageSlice /> */}
    </ThemeProvider>
  );
};

export default App;
