import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    '& p': {
      display: 'block',
    },
    '& iframe': {
      margin: '20px 0',

      [theme.breakpoints.down('xl')]: {
        width: '700px',
        height: '500px',
      },

      [theme.breakpoints.down('lg')]: {
        width: '450px',
        height: '350px',
      },

      [theme.breakpoints.down('md')]: {
        width: '300px',
        height: '200px',
      },

      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '400px',
      },
    },
  },

  stepper: {
    justifyContent: 'center',
    display: 'flex',

    '& > div': {
      marginTop: '20px',
      width: '75%',
      background: theme.palette.primary.main,
      color: theme.palette.common.white,

      [theme.breakpoints.up('lg')]: {
        width: '600px',
      },

      [theme.breakpoints.up('xl')]: {
        width: '800px',
      },

      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },

      '& > button': {
        color: theme.palette.common.white,
      },
    },
  },
}));

export default useStyle;
