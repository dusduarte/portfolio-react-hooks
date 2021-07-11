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
          display: 'block',
          margin: '0 auto',

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
