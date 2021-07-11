import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    '&  .MuiGrid-container': {
      '& .MuiGrid-item': {
        [theme.breakpoints.down('sm')]: {
          '&:last-child': {
            marginTop: '40px'
          },
        },

      }
    },
    '& .MuiAccordion-root': {
      background: theme.palette.primary.main,

      '& .MuiAccordionSummary-root': {
        [theme.breakpoints.down('sm')]: {
          minHeight: '70px'
        }
      },

      '& .MuiAccordionSummary-content': {
        fontWeight: 'bold',

        '& label': {
          fontSize: '13pt',
          color: theme.palette.common.white,
          fontWeight: 100
        }
      },

      '& .MuiIconButton-label': {
        color: theme.palette.common.white
      },

      '& .MuiList-root': {
        paddingLeft: '15px',
        paddingRight: '15px',

        '& .MuiListItem-root': {
          '& span': {
            fontSize: '11pt',
            fontFamily: 'syne',
            color: theme.palette.common.white,
            letterSpacing: 1
          }
        }
      }
    },

    '& img': {
      maxWidth: '250px',
      width: '100%',
      display: 'block',
      margin: '0 auto',

      [theme.breakpoints.up('md')]: {
        maxWidth: '300px',
      },

      [theme.breakpoints.up('xl')]: {
        maxWidth: '500px',
      },
    }
  }
}));

export default useStyle;
