import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { DIRECTION_BACKWARD, DIRECTION_FORWARD } from '../../utils/consts';

const PaginationBtns = ({ pageInfo, paginationRequest }) => (
  <div>
    <Button
      variant="contained"
      disabled={!pageInfo.hasPreviousPage}
      onClick={paginationRequest(DIRECTION_BACKWARD)}
    >
      Prev
    </Button>
    <Button
      variant="contained"
      disabled={!pageInfo.hasNextPage}
      onClick={paginationRequest(DIRECTION_FORWARD)}
    >
      Next
    </Button>
  </div>
);

PaginationBtns.propTypes = {
  paginationRequest: PropTypes.func.isRequired,
  pageInfo: PropTypes.object.isRequired,
};

export default PaginationBtns;
