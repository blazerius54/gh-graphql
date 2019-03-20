import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
});

class FilterInput extends React.Component {
  render() {
    const { classes, handleChange, searchText, sendRepoRequest } = this.props;
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={sendRepoRequest(searchText)}
      >
        <TextField
          id="standard-dense"
          label="Dense"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          value={searchText}
          onChange={handleChange('searchText')}
        />
        <button type="submit">click</button>
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
