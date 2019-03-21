import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppHeader from '../../components/AppHeader/index';
import ReposTable from '../../components/ReposTable/index';
import FilterInput from '../../components/FilterInput/index';
import { sendCardRequest } from './actions';
import { DIRECTION_BACKWARD } from '../../utils/consts';
import PaginationBtns from '../../components/PaginationBtns';

class MainPage extends Component {
  state = {
    searchText: 'book-tabs',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  sendRepoRequest = () => e => {
    const { sendCardRequest } = this.props;
    const { searchText } = this.state;

    e.preventDefault();
    sendCardRequest(searchText);
  };

  paginationRequest = direction => () => {
    const { pageInfo, sendCardRequest } = this.props;
    const { searchText } = this.state;
    const cursor =
      direction === DIRECTION_BACKWARD
        ? pageInfo.startCursor
        : pageInfo.endCursor;

    sendCardRequest(searchText, cursor, direction);
  };

  render() {
    const { searchText } = this.state;
    const { reposList, pageInfo, loading } = this.props;

    return (
      <React.Fragment>
        <AppHeader />
        <FilterInput
          handleChange={this.handleChange}
          sendRepoRequest={this.sendRepoRequest}
          searchText={searchText}
        />
        <ReposTable reposList={reposList} loading={loading} />
        <PaginationBtns
          paginationRequest={this.paginationRequest}
          pageInfo={pageInfo}
        />
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
