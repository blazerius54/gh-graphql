import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppHeader from '../../components/AppHeader/index';
import ReposTable from '../../components/ReposTable/index';
import FilterInput from '../../components/FilterInput/index';
import { sendCardRequest } from './actions';

class MainPage extends Component {
  state = {
    searchText: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  sendRepoRequest = () => e => {
    e.preventDefault();
    console.log(this.state.searchText)
    this.props.sendCardRequest(this.state.searchText);
  };

  render() {
    const { searchText } = this.state;
    const { reposList } = this.props;
    return (
      <React.Fragment>
        <AppHeader />
        <FilterInput
          handleChange={this.handleChange}
          sendRepoRequest={this.sendRepoRequest}
          searchText={searchText}
        />
        <ReposTable reposList={reposList} />
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  loading: state.loading,
  reposList: state.reposList,
  pageInfo: state.pageInfo,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendCardRequest }, dispatch);

MainPage.propTypes = {
  sendCardRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  reposList: PropTypes.array.isRequired,
  pageInfo: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
