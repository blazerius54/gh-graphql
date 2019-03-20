import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import ReposTable from './components/ReposTable';
import FilterInput from './components/FilterInput';
import { getRepos } from './network';
class App extends Component {
  state = {
    serachInput: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  sendRepoRequest = () => e => {
    e.preventDefault();
    getRepos(this.state.serachInput);
  };

  render() {
    const { serachInput } = this.state;
    return (
      <div className="App-wapper">
        <AppHeader />
        <FilterInput
          handleChange={this.handleChange}
          sendRepoRequest={this.sendRepoRequest}
          serachInput={serachInput}
        />
        <ReposTable />
      </div>
    );
  }
}

export default App;
