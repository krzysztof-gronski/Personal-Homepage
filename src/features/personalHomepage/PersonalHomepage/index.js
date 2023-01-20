import { Portfolio } from "./Portfolio";
import { Container, Icon } from "./styled";
import { MainInformation } from "./MainInformation";
import { nextSkills, skills } from "./skillsData";
import { Skills } from "./Skills";
import { Footer } from "./Footer";
import { ThemeSwitch } from "../../../common/ThemeSwitch";
import toolsIcon from "./toolsIcon.png";
import rocketIcon from "./rocketIcon.png";

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch/>
    <MainInformation />

    <main>
      <Skills
        title={
          <>
            My skillset includes <Icon src={toolsIcon} alt="" />
          </>
        }
        skills={skills}
      ></Skills>
      <Skills
        title={
          <>
            What I want to learn next` <Icon src={rocketIcon} alt="" />
          </>
        }
        skills={nextSkills}
      ></Skills>
      <Portfolio />
    </main>
    <Footer />
  </Container>
);
