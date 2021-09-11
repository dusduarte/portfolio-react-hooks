import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    '& img': {
      maxWidth: '315px',
      width: '100%',

      [theme.breakpoints.up('lg')]: {
        maxWidth: '450px'
      },

      [theme.breakpoints.up('xl')]: {
        maxWidth: '550px'
      },

    }
  }
}));

export default useStyle;
