import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    '&  .MuiGrid-container': {
      '& .MuiGrid-item': {
        [theme.breakpoints.down('sm')]: {
          '&:last-child': {
            marginTop: '40px'
          }
        },

        '& img': {
          maxWidth: '315px',
          width: '100%',

          [theme.breakpoints.up('xl')]: {
            maxWidth: '550px',
          }
        }
      }
    }
  }
}));

export default useStyle;
