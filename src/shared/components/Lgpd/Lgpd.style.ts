import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    bottom: '10px',
    zIndex: 4,
    left: 0,
    right: 0,
    margin: 'auto',
    border: '4px solid',
    padding: '15px',
    borderColor: theme.palette.secondary.light,
    width: '70%',
    background: theme.palette.primary.dark,
    justifyContent: 'space-between',
    animation: `$effect 500ms ${theme.transitions.easing.easeIn}`,
    boxShadow: '0px -2px 58px 9px rgb(0 0 0 / 85%)',

    '& > div': {
      '& p': {
        fontSize: '8pt',
        margin: '0 5px 0 0',
        display: 'inline'
      },

      '& .btn-policy': {
        background: 'transparent',
        border: 'none',
        fontSize: '8pt',
        margin: 0,
        padding: 0,
        textDecoration: 'underline',
        cursor: 'pointer',
        color: '#FFF'
      },
    },

    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: '0 10px'
    },

    '& .btn-close': {
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white,
      marginLeft: '10px',

      '& .MuiButton-label': {
        fontSize: '8pt'
      }
    }
  },
  dialog: {
    '& .MuiDialogTitle-root': {
      '& h2': {
        fontSize: '15pt'
      }
    },
    '& .MuiDialogContent-root': {
      height: '300px',
      overflowY: 'scroll',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',

      '& h3': {
        width: '100%',
        margin: '0 0 10px 0',
        textTransform: 'uppercase',
        fontSize: '12pt'
      },

      '& p': {
        margin: '0 0 30px 0',
        fontSize: '12pt',
        width: '100%',
      }
    }
  },
  '@keyframes effect': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    }
  }
}));

export default useStyle;
