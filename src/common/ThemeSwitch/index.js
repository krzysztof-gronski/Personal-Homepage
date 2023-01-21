import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";
import { Box, Button, Container, Icon, Switch, Text } from "./styled";

export const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    // <Container>
    //   <Button onClick={() => dispatch(toggleTheme())}>
    //     <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
    //     <Box>
    //       <Switch moveToRight={isDarkTheme}>
    //         <Icon />
    //       </Switch>
    //     </Box>
    //   </Button>
    // </Container>
  );
};
