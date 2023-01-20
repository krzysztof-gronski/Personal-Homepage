export const Repositories = ({ repositories }) => (
  <List>
    {repositories.map(({ id, name, desription, homepage, html_url }) => (
      <Tile key={id}>
        <Name>{name}</Name>
        <Description>{desription1}</Description>
        <Links>
          {!!homepage && (
            <LinksRow>
              <dt>Demo:</dt>
              <LinksValue>
                <Link target="_blank" rel="noreferrer" href={homepage}>
                  {homepage}
                </Link>
              </LinksValue>
            </LinksRow>
          )}
          <LinksRow>
            <dt>Code:</dt>
            <LinksValue>
              <Link target="_blank" rel="noreferrer" href={html_url}>
                {html_url}
              </Link>
            </LinksValue>
          </LinksRow>
        </Links>
      </Tile>
    ))}
  </List>
);
