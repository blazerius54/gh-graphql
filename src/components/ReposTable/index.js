import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { styles } from './styles';

const formatDate = date =>
  `${new Date(date).getDate()}.${new Date(date).getMonth() + 1}.${new Date(
    date,
  ).getFullYear()}`;

const ReposTable = ({ classes, reposList, loading }) => (
  <Paper className={classes.root}>
    {loading && <div className={classes.loader} />}
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell align="center">Username</TableCell>
          <TableCell align="center">Repo`s name</TableCell>
          <TableCell align="center">Created at</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {reposList.map(repo => (
          <TableRow
            className={(classes.centerText, classes.row)}
            key={repo.node.name}
            onClick={() => window.open(repo.node.url, '_blank')}
          >
            <TableCell align="center" component="th" scope="row">
              {repo.node.owner.login}
            </TableCell>
            <TableCell align="center">{repo.node.name}</TableCell>
            <TableCell align="center">
              {formatDate(repo.node.createdAt)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

ReposTable.propTypes = {
  classes: PropTypes.object.isRequired,
  reposList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ReposTable);
