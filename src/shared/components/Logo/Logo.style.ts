import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    display: 'inline-flex',
    flexDirection: 'column',
    maxWidth: '110px',

    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },

    '& > div': {
      display: 'inline',
      marginBottom: '2.5px',

      '& label': {
        fontWeight: 'bold',
        fontSize: '13px',
      },

      '&:last-child': {
        '& label': {
          padding: '4px 8px',
          background: theme.palette.primary.light,
        }
      }
    },
  },
}));

export default useStyle;
