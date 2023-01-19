import { email } from "../email";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => (
  <Container>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailContainer>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailContainer>
      <Paragraph>Im open. Rdy to work.</Paragraph>
      <SocialIcons />
    </Address>
  </Container>
);
