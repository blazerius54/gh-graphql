export const styles = theme => ({
  root: {
    width: '100%',
    textAlign: 'center',
    margin: '20px 0',
    overflowX: 'auto',
    position: 'relative',
  },

  table: {
    minWidth: 700,
  },

  row: {
    cursor: 'pointer',

    '&:hover': {
      background: '#e4e4e4',
    },
  },

  centerText: {
    textAlign: 'center',
  },

  loader: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.4)',
  },
});
