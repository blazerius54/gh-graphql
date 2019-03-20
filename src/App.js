import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import ReposTable from './components/ReposTable';
import FilterInput from './components/FilterInput';

class App extends Component {
  foo = () =>
    fetch(`https://api.github.com/graphql`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer 0439d815c554fa03c75db280c22914316b495013`,
      },
      method: 'POST',
      body: JSON.stringify({
        query:
          `query {
            search(query: "book-tabs", type: REPOSITORY, first: 5, ) {
              repositoryCount
              pageInfo {
                hasPreviousPage
                startCursor
                endCursor
                hasNextPage
              }
            }
          }`,
      }),
    });

  render() {
    return (
      <div className="App-wapper">
        <AppHeader />
        <FilterInput />
        <button onClick={this.foo}>click</button>
        <ReposTable />
      </div>
    );
  }
}

export default App;
