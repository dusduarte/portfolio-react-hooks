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
          maxWidth: '400px',
          width: '100%',
          margin: '0 auto',
          display: 'block',

          [theme.breakpoints.down('sm')]: {
            margin: 0
          },

          [theme.breakpoints.up('md')]: {
            maxWidth: '250px',
          },

          [theme.breakpoints.up('lg')]: {
            maxWidth: '450px',
          },

          [theme.breakpoints.up('xl')]: {
            maxWidth: '550px',
          },
        }
      }
    }
  }
}));

export default useStyle;
