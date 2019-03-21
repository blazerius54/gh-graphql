import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import AppHeader from '../../components/AppHeader/index';
import ReposTable from '../../components/ReposTable/index';
import FilterInput from '../../components/FilterInput/index';
import { sendCardRequest } from './actions';
import { DIRECTION_FORWARD, DIRECTION_BACKWARD } from '../../utils/consts';
import PaginationBtns from '../../components/PaginationBtns';

class MainPage extends Component {
  state = {
    searchText: 'book-zzz',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  sendRepoRequest = () => e => {
    e.preventDefault();
    this.props.sendCardRequest(this.state.searchText);
  };

  paginationRequest = direction => {
    console.log(direction)
    if (direction === DIRECTION_BACKWARD) {
      this.props.sendCardRequest(
        this.state.searchText,
        this.props.pageInfo.startCursor,
        direction,
      );
    }

    if (direction === DIRECTION_FORWARD) {
      this.props.sendCardRequest(
        this.state.searchText,
        this.props.pageInfo.endCursor,
        direction,
      );
    }
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
        {/*<PaginationBtns*/}
          {/*paginationRequest={this.paginationRequest}*/}
          {/*pageInfo={pageInfo}*/}
        {/*/>*/}
         <div>
         <Button
         variant="contained"
         disabled={!pageInfo.hasPreviousPage}
         onClick={() => this.paginationRequest(DIRECTION_BACKWARD)}
         >
         Prev
         </Button>
         <Button
         variant="contained"
         disabled={!pageInfo.hasNextPage}
         onClick={() => this.paginationRequest(DIRECTION_FORWARD)}
         >
         Next
         </Button>
         </div>
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
