import portrait from "./portrait.jpg";
import faceIcon from "./face.png";
import laptopIcon from "./laptop.png";
import { email } from "../email";
import {
  Avatar,
  ButtonIcon,
  Container,
  Icon,
  Name,
  StyledButtonLink,
  Summary,
  ThisIs,
} from "./styled";

export const MainInformation = () => (
  <Container>
    <Avatar src={portrait} alt="Krzysztof Gronski" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Krzysztof Gronski</Name>
      <Summary>
        <Icon src={faceIcon} />
        <Icon src={laptopIcon} />
        &nbsp;Creative, fast learning Frontend Developer, passionate about applying
        skills on collaborative environment, with a desire to provide
        satisfactionary service and deliver quality products.{" "}
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Container>
);
