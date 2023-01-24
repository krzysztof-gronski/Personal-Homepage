import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import {
  Address,
  Container,
  EmailContainer,
  EmailLink,
  LetsTalk,
  Paragraph,
} from "./styled";

export const Footer = () => (
  <Container>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailContainer>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailContainer>
      <Paragraph>
        Looking forward to new job opportunities and skillset improving. If you
        need innovative, modern solutions for your valuable project, do not
        hesitate to contact me.
      </Paragraph>
      <SocialIcons />
    </Address>
  </Container>
);
