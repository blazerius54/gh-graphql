import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class FilterInput extends React.Component {
  state = {
    dense: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { dense } = this.state;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-dense"
          label="Dense"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          value={dense}
          onChange={this.handleChange('dense')}
        />
      </form>
    );
  }
}

FilterInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterInput);