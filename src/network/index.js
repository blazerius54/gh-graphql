export const getRepos = searchText =>
  fetch(`https://api.github.com/graphql`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      query: `query {
            search(query: "${searchText}", type: REPOSITORY, first: 5, ) {
              repositoryCount
              pageInfo {
                hasPreviousPage
                startCursor
                endCursor
                hasNextPage
              }
              edges {
                node {
                  ... on Repository {
                    owner {
                      login
                      avatarUrl
                    }
                    name
                    createdAt
                  }
                }
              }
            }
          }`,
    }),
  });
