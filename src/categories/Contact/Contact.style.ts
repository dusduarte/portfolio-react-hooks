import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',

    '& a': {
      color: theme.palette.common.white,
      textDecoration: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      marginBottom: '15px',
      transition: 'all 250ms',

      '&:hover': {
        transition: 'all 250ms',
        background: theme.palette.secondary.dark,
        padding: '0 15px'
      },

      '& svg': {
        marginRight: '15px',
        margin: '10px 0 10px 0'
      },

      '& label': {
        cursor: 'pointer',
        margin: '10px 0 10px 0'
      }
    },

    '& .container-img': {
      position: 'relative',
      transform: 'scaleX(-1)',

      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        width: '100px',
        right: '15px',
        bottom: '20px'
      },

      '& img': {
        width: '200px',
        display: 'block',
        margin: '0 auto',

        [theme.breakpoints.down('sm')]: {
          width: '100%'
        }
      }
    }
  }
}));

export default useStyle;
