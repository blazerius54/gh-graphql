import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name) {
  id += 1;
  return { id, name};
}

const rows = [
  createData('Frozen yoghurt', 159),
];

const ReposTable = ({ classes, reposList }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Username</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {reposList.map(repo => (
          <TableRow>
            <TableCell component="th" scope="row">
              {repo.node.owner.login}
            </TableCell>
            <TableCell align="right">{repo.node.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

ReposTable.propTypes = {
  classes: PropTypes.object.isRequired,
  reposList: PropTypes.array.isRequired,
};

export default withStyles(styles)(ReposTable);
