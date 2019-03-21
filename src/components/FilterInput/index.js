import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { styles } from './styles';

class FilterInput extends React.Component {
  render() {
    const { classes, handleChange, searchText, sendRepoRequest } = this.props;
    return (
      <form
        className={classNames(classes.form)}
        noValidate
        autoComplete="off"
        onSubmit={sendRepoRequest(searchText)}
      >
        <TextField
          id="standard-dense"
          label="Search"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          value={searchText}
          onChange={handleChange('searchText')}
        />
        <Button variant="contained" type="submit"
                className={classNames(classes.button)}
        >
          Search
        </Button>
      </form>
    );
  }
}

FilterInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  sendRepoRequest: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default withStyles(styles)(FilterInput);
