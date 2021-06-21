import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: (props: { background: string }) => ({
    background: props.background,
    widht: '100%',
    padding: '80px 60px',

    [theme.breakpoints.down('sm')]: {
      padding: '80px 30px'
    },

    '& h2': {
      fontSize: '40px',
      position: 'relative',
      margin: '0 0 60px 0',
      letterSpacing: '3px',
      fontWeight: '100',

      '&::first-letter': {
        color: theme.palette.secondary.light
      },

      '&::after': {
        content: '""',
        width: '20px',
        height: '4px',
        position: 'absolute',
        bottom: '-7px',
        left: '1.5px',
        background: theme.palette.secondary.light
      }
    },

    '& > .MuiGrid-container': {
      display: 'flex',
      alignItems: 'center',

      [theme.breakpoints.down('sm')]: {
        '& > .MuiGrid-item:nth-of-type(2)': {
          marginTop: '40px'
        }
      }
    }
  })
}));

export default useStyle;
