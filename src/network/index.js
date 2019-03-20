export const getRepos = searchText =>
  fetch(`https://api.github.com/graphql`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer feb53d8cd670a08fe0514f09da2b8b73a8cb0265`,
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
                    nameWithOwner
                    createdAt
                  }
                }
              }
            }
          }`,
    }),
  });
