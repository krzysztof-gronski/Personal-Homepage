import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "./icons/linkedin.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/krzysztof-gronski",
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/krzysztof.gronski.3",
    Icon: styleIcon(FacebookIcon),
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com",
    Icon: styleIcon(LinkedinIcon),
  },
];
