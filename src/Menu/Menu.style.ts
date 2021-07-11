import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  navbar: {
    '& .MuiAppBar-root': {
      position: 'fixed',
      paddingLeft: '35px',
      paddingRight: '35px',
      background: theme.palette.primary.dark,

      [theme.breakpoints.down('sm')]: {
        paddingLeft: '30px',
        paddingRight: '30px',
        zIndex: 2,
      },
    },
    '& .MuiToolbar-root': {
      minHeight: '80px',
      padding: '0',

      '& .MuiButtonBase-root': {
        padding: '5px 0 5px 30px'
      }
    },

    '& .MuiGrid-root:last-child': {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
  menu: {
    '& .container-menu': {
      width: '110px',
      height: '100%',
      position: 'fixed',
      zIndex: 3,

      [theme.breakpoints.down('sm')]: {
        left: '-200px',
        transition: '300ms linear',
      },
    },

    '& #open': {
      [theme.breakpoints.down('sm')]: {
        left: '0',
        transition: '300ms linear',
        width: '200px',
      },

      '& .MuiListItem-root': {
        [theme.breakpoints.down('sm')]: {
          opacity: 1
        }
      }
    },

    '& .MuiList-root': {
      background: theme.palette.primary.dark,
      height: '100%',
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'column',

      '@media (min-height:1700px)': {
        justifyContent: 'flex-start',
      },

      [theme.breakpoints.down('sm')]: {
        justifyContent: 'flex-start',
        overflow: 'scroll',
      },

      '& .container-logo': {
        paddingTop: '10px',
        display: 'flex',
        justifyContent: ' center',

        [theme.breakpoints.down('sm')]: {
          display: 'none',
        }
      },

      '& .MuiListItem-root': {
        flexDirection: 'column',
        color: theme.palette.common.white,
        transition: '250ms linear',

        '&:last-child': {
          paddingBottom: '30px',
          '@media (min-height:1700px)': {
            paddingBottom: 0
          }
        },

        '@media (min-height:1700px)': {
          paddingBottom: '50px',
          paddingTop: '50px'
        },

        [theme.breakpoints.down('sm')]: {
          flexDirection: 'row',
          padding: '30px 0',
          opacity: 0
        },

        '& label': {
          fontSize: '10pt',
          cursor: 'pointer',

          [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
          },
        },

        '&:hover': {
          background: theme.palette.secondary.dark,
          transition: '250ms linear',
        },

        '& .MuiListItemIcon-root': {
          display: 'block',
          textAlign: 'center',
          color: theme.palette.secondary.main,

          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
          },

          '& svg': {
            fontSize: '35px',

            [theme.breakpoints.down('sm')]: {
              fontSize: '25px',
            },
          },
        },
      },
    },
  },
}));

export default useStyle;
