import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    width: '100%',

    '& > .MuiGrid-item': {
      '&:nth-of-type(1)': {
        paddingRight: '20px',

        [theme.breakpoints.down('sm')]: {
          paddingRight: '0px',
        }
      },

      '&:nth-of-type(2)': {
        paddingLeft: '20px',

        [theme.breakpoints.down('sm')]: {
          paddingLeft: '0px',
        }
      },

      [theme.breakpoints.down('sm')]: {
        '& > .MuiGrid-item:nth-of-type(2)': {
          marginTop: '40px'
        }
      },

      '& p': {
        display: 'block',
      },
      '& iframe': {
        margin: '20px 0',

        [theme.breakpoints.down('xl')]: {
          width: '100%',
          height: '500px',
        },

        [theme.breakpoints.down('lg')]: {
          height: '400px',
        },

        [theme.breakpoints.down('md')]: {
          width: '300px',
          height: '200px',
        },

        [theme.breakpoints.down('sm')]: {
          width: '100%',
          height: '300px',
        },
      },
    },
  },

  stepperVideo: {
    justifyContent: 'center',
    display: 'flex',

    '& > div': {
      marginTop: '20px',
      width: '75%',
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontSize: '15px',

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

        '& .MuiButton-label': {
          fontSize: '14px',
        }
      },
    },
  },

  stepperImage: {
    justifyContent: 'center',
    display: 'flex',

    '& > div': {
      marginTop: '20px',
      width: '100%',
      background: theme.palette.common.white,
      color: theme.palette.common.black,
      fontSize: '15px',

      [theme.breakpoints.up('xl')]: {
        width: '800px',
      },

      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },

      '& > button': {
        color: theme.palette.common.black,

        '& .MuiButton-label': {
          fontSize: '14px'
        }
      },
    },
  },
}));

export default useStyle;
