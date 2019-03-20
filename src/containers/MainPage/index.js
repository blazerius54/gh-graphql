import React, { Component } from 'react';
import AppHeader from '../../components/AppHeader/index';
import ReposTable from '../../components/ReposTable/index';
import FilterInput from '../../components/FilterInput/index';
import { getRepos } from '../../network/index';

class MainPage extends Component {
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
      <React.Fragment>
        <AppHeader />
        <FilterInput
          handleChange={this.handleChange}
          sendRepoRequest={this.sendRepoRequest}
          serachInput={serachInput}
        />
        <ReposTable />
      </React.Fragment>
    );
  }
}

export default MainPage;
