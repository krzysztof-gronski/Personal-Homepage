import { useDispatch, useSelector } from "react-redux";
import { githubUsername } from "./GithubUsername";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(githubUsername));
  }, []);

  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <SubHeader>Portfolio</SubHeader>
        <MyRecentProject>My recent projects</MyRecentProject>
      </Header>
      <Content status={repositoriesStatus} repositories={repositories} />
    </Section>
  );
};
