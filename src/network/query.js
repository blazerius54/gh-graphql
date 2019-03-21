export const setBodyQuery = (searchText, queryArgs) =>
  JSON.stringify({
    query: `query {
            search(query: "${searchText}", type: REPOSITORY, ${queryArgs} ) {
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
                    }
                    url
                    name
                    createdAt
                  }
                }
              }
            }
          }`,
  });
