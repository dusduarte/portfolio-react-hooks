import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiGrid-container': {
      '& .MuiPagination-root': {
        [theme.breakpoints.down('sm')]: {
          marginTop: '40px',
        }
      }
    }
  },
  containerImage: {
    '& .MuiGrid-item': {

      '&:first-child': {
        paddingRight: '25px',

        [theme.breakpoints.down('sm')]: {
          paddingRight: '0px',
        }
      },

      '&:nth-of-type(2)': {
        paddingLeft: '25px',

        [theme.breakpoints.down('sm')]: {
          marginTop: '40px',
          paddingLeft: '0px',
        }
      },
    },

    '& img': {
      width: '100%',
      cursor: 'pointer',
    },

    '& label': {
      textAlign: 'center',
      display: 'block',
      marginTop: '10px',
      paddingTop: '10px',
      borderTop: '4px solid',
      borderColor: theme.palette.primary.dark
    }
  },
  containerPagination: {
    width: '100%',
    marginTop: '20px',

    '& .MuiPagination-root': {
      textAlign: 'center',
      display: 'block',
      margin: '50px auto 0 auto',

      [theme.breakpoints.down('sm')]: {
        margin: '20px auto 0 auto',
      },

      '& .MuiPagination-ul': {
        background: theme.palette.secondary.light,
        display: 'inline-flex',
        justifyContent: 'center',
        borderRadius: '4px',

        [theme.breakpoints.down('sm')]: {
          background: 'unset'
        },

        '& li': {
          display: 'flex',
          width: '60px',
          height: '40px',

          [theme.breakpoints.down('sm')]: {
            background: theme.palette.secondary.main,
            margin: '0 15px 15px 15px',
            width: '40px'
          },

          '& .MuiButtonBase-root': {
            [theme.breakpoints.down('sm')]: {
              margin: 0,
              color: theme.palette.common.white,
            }
          },

          '& .Mui-selected': {
            color: theme.palette.common.white,

            [theme.breakpoints.down('sm')]: {
              background: theme.palette.primary.light,
            }
          },

          '& .MuiPaginationItem-root': {
            borderRadius: '0',
            fontSize: '20px',
            height: '100%',
            width: '100%'
          }
        }
      },
    }
  },

  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'inline-flex',
    margin: '0 auto',
    maxWidth: '800px',

    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },

    '@media (max-height:500px)': {
      width: '60%',
    }

  },

  paper: {
    backgroundColor: theme.palette.common.white,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '15px 15px 0 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '@media (max-height:500px)': {
      height: '90%'
    },

    '& img': {
      maxHeight: '450px',
      display: 'block',
      margin: '0 auto',

      [theme.breakpoints.down('sm')]: {
        maxWidth: '96%',
        maxHeight: '65vh'
      },
    }
  },
}));

export default useStyle;
