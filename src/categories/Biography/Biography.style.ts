import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    '& img': {
      maxWidth: '300px',
      width: '100%',

      [theme.breakpoints.up('xl')]: {
        maxWidth: '550px',
      },

      [theme.breakpoints.down('sm')]: {
        display: 'block',
        margin: '0 auto',
      }
    }
  }
}));

export default useStyle;
