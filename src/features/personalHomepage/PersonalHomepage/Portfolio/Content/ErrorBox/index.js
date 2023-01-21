import { Container, Header, Paragraph } from "./styled";
import { ReactComponent as WarningIcon } from "./warning.svg";
import { githubUsername } from "../../githubUsername";
import { ButtonLink } from "../../../ButtonLink";

export const ErrorBox = () => (
  <Container>
    <WarningIcon />
    <Header>Ooops! Something went&nbsp;wrong...</Header>
    <Paragraph>
      Sorry, failed to load Github&nbsp;projects.
      <br />
      You can check them directly&nbsp;on&nbsp;Github.
    </Paragraph>
    <ButtonLink
      href={`https://github.com/${githubUsername}`}
      target="_blank"
      rel="noreferer"
    >
      Go to Github
    </ButtonLink>
  </Container>
);
