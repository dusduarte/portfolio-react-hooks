import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    paddingBottom: '50px',
  },

  containerGrids: {
    '& > *': {
      padding: '30px',

      [theme.breakpoints.down('sm')]: {
        padding: '20px 0',
      },
    },
  },

  containerTitle: {
    display: 'inline-block',
    position: 'relative',
    margin: '10px 0',

    '& h2': {
      position: 'relative',
      fontSize: '35pt',
      margin: '0 10px 20px 0',
      fontWeight: 'normal',

      [theme.breakpoints.down('sm')]: {
        fontSize: '25pt',
      },
    },

    '&::after': {
      content: '""',
      width: '20px',
      height: '3px',
      position: 'absolute',
      bottom: '20px',
      left: '0',
      background: theme.palette.primary.light,
    },

    '&::first-letter': {
      fontWeight: 'bold',
      color: theme.palette.primary.light,
    },
  },

  graphic: {
    position: 'absolute',
    bottom: '25px',
    right: '-35px',

    '& div': {
      width: '5px',
      height: '10px',
      background: theme.palette.secondary.main,
      display: 'inline-block',
      marginRight: '6px',

      '&:nth-of-type(1)': {
        height: '30px',
        width: '2px',
        opacity: '0.4',

        '&::before': {
          content: '""',
          background: theme.palette.secondary.main,
          height: '30px',
          width: '2px',
          position: 'absolute',
          left: '-5px',
        },
      },

      '&:nth-of-type(2)': {
        height: '23px',
      },

      '&:nth-of-type(3)': {
        height: '17px',
      },
    },
  },
}));

export default useStyle;
